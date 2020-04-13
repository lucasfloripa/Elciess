const advancedResults = (model, populate) => async (req, res, next) => {
  let query;

  // Copia req.query
  const reqQueryAux = { ...req.query };

  // Fields para excluir para não serem usados como fields do modelo
  const removeFields = ["select", "sort", "page", "limit"];

  // Loop sobre os removeFields e deleta
  removeFields.forEach(param => delete reqQueryAux[param]);

  // Criando query string
  let queryStr = JSON.stringify(reqQueryAux);

  // Criando operators ($gt, $gte, etc)
  queryStr = queryStr.replace(/\b(gt|gte|lt|lte|in)\b/g, match => `$${match}`);

  // Achando os recursos
  query = model.find(JSON.parse(queryStr));

  // Selecionandos os fields
  if (req.query.select) {
    const fields = req.query.select.split(",").join(" ");
    query = query.select(fields);
  }

  // Ordenação
  if (req.query.sort) {
    const sortBy = req.query.sort.split(",").join(" ");
    query = query.sort(sortBy);
  } else {
    query = query.sort("-averageCost");
  }

  // Paginação
  const totalDocs = await model.countDocuments();
  const page = parseInt(req.query.page, 10) || 1;
  const limit = parseInt(req.query.limit, 10) || 25;
  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;
  query = query.skip(startIndex).limit(limit);

  // Populate
  if (populate) {
    query = query.populate(populate);
  }

  // Executando a query
  const results = await query;

  // Resultado da paginação
  const pagination = {};

  if (endIndex < totalDocs) {
    pagination.next = {
      page: page + 1,
      limit: limit
    };
  }

  if (startIndex > 1) {
    pagination.prev = {
      page: page - 1,
      limit: limit
    };
  }

  res.advancedResults = {
    sucesso: true,
    contagem: results.length,
    pagination,
    data: results
  };

  next();
};

module.exports = advancedResults;
