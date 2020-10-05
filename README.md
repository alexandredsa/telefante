
## Como utiliza?
1. Rode em algum canal o comando ".telefante iniciar com @ayala @tevez @messi". 
Irá ser criado um novo jogo com os membros mencionados na mensagem.

2. O bot irá enviar no privado os comandos do jogo. Se pedir um título inicial, uma imagem ou título da imagem.

3. No final o bot irá apresentar os capítulos desse livro criado no canal em que ele foi chamado inicialmente.


## Para os desenvolvedores

### Entidades

##### Page
  - content
  - type `values: [Image/Title]` 
##### Chapter
  - pages []Page
  - id
##### Book
  - chapters []Chapter
  - id
  - players []Player

##### Player
  - userId
  - displayName
