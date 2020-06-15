# Elciess 
### Ambiente gamificado para estudos :video_game::books::trophy: (Em desenvolvimento)

### Venho trabalhando nesse projeto diariamente para poder praticar o que venho estudando.

![alt text](https://github.com/lucasfloripa/Elciess/blob/master/frontend/src/assets/images/castelo.png?raw=true)

## Funcionalidades
  - Criação/Edição de Alunos, Professores, Turmas, Avisos, Desafios.
  - Aluno entrega desafios atráves de upload de txt file.
  - Alunos e Professores tem a opção de escolher Avatares pré-definidos para o seu profile.
  
## Relacionamentos  
  - Aluno pode ter 0 ou N desafios, desafios podem ter 0 ou N alunos.
  - Aluno pode ter 1 turma, turma pode ter 0 ou N alunos.
  - Professor pode ter 0 ou N avisos, avisos pode ter 1 professor.
  - Professor pode ter 0 ou N desafios, desafios pode ter 1 professor.
  - Professor pode ter 0 ou N turmas, turmas pode ter 1 ou N professores.
  - Desafio pode ter 1 turma, turma pode ter 0 ou N desafios.
  - Turma pode ter 0 ou N avisos, avisos pode ter 1 turma.

## Technologies :computer:
Front-end
  - React
  - Redux
  - Bootstrap
  - Formik/Yup
  - Axios
  - SaSS
   
Back-end
  - NodeJS
  - Express
  - Mongoose
  - MongoDB
  - JsonWebToken
  - multer/gridFS

## To Do List :heavy_check_mark:
- [x] Login/Register
- [x] Routes protection
- [x] Authentication
- [x] Edit Profile and Hashed Password
- [x] Upload/Download txt Files
- [ ] Transformar o DataContainer para RenderProps
- [ ] Jest
- [ ] Duck Pattern
- [ ] TypeScript
- [ ] React Hooks
- [ ] Midia Queries
