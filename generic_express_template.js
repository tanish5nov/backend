import express from 'express';

const app = express();
const port = 3000 // eg. localhost


app.get('request URL', (request, response) =>{
  response.send("<h1>HELLO EXPRESS</h1>");
}
)

app.listen(port, ()=>{
  console.log(`listening on the ${port}`);
})
