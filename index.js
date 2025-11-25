const express = require('express')
const app = express()


const itensCardapios = [
    {
        "id": 1,
        "nome": "Marmita Delicia",
        "descricao": "arroz, feijão, batata frita, bife a cavalo",
        "foto": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWeiy8Ogi21GXZa9K314p0yQICeotbB7K9nQ&s",
        "preco": 29.0
    },
    {
        "id": 2,
        "nome": "Marmita Parmegiana",
        "descricao": "arroz, batata frita, frango a milanesa com molho de tomate e presunto e queijo",
        "foto": "https://www.estadao.com.br/resizer/v2/WSWGR3VNIVEMZEDCZ3DPAQD3BQ.jpg?quality=80&auth=1e80a50a274f370b5a498c5c05e3c3922fcfcc23a8d31821b4ab182863e56060&width=720&height=410&focal=758,1139",
        "preco": 29.0
    },
    {
        "id": 3,
        "nome": "Marmita Picanha ",
        "descricao": "arroz, feijão e picanha",
        "foto": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpg9cVHd0sWwO2WVytADGNn9yADjUwYPmmQA&s",
        "preco": 22.90
    },
    {
        "id": 4,
        "nome": "Marmita Feijoada",
        "descricao": "arroz, couve, bisteca, torresmo, farofa e vinagrete",
        "foto": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTU_5dR6123Hfv5ha_IOg-uoL1uf_Kgvt8-sA&s",
        "preco": 55.90
    },
    {
        "id": 5,
        "nome": "Marmita Bife a milanesa",
        "descricao": "arroz, feijão, batata frita, bife a milanesa",
        "foto": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWeiy8Ogi21GXZa9K314p0yQICeotbB7K9nQ&s",
        "preco": 19.0
    }
]

const itensBebidas = [
    {
        "id": 6,
        "nome": "Coca Cola Zero",
        "descricao": "Refrigerante Lata 350ml ZERO",
        "foto": "https://bistek.vtexassets.com/arquivos/ids/207162/998982.png?v=638888785140370000",
        "preco": 4.90
    },
    {
        "id": 7,
        "nome": "Cachaça Pitu",
        "descricao": "Cachaça Pitu de 350ml",
        "foto": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmW53HpZ_7b5onX-09TsER1DEGEU8aKLoU2A&s",
        "preco": 10.00
    }
]

const itensSaladas = [
    {
        "id": 8,
        "nome": "SALADA CAESAR",
        "descricao": "Caesar salad, salada Caesar ou salada César é uma salada preparada com alface-romana e molho Caesar. Os temperos usados mais habitualmente para compor este molho são azeite de oliva, suco de limão, anchovas, queijo parmesão, molho inglês, sal, açúcar e pimenta-preta.",
        "foto":"https://p2.trrsf.com/image/fget/cf/1200/900/middle/images.terra.com/2023/02/28/whatsapp-image-2023-02-28-at-01-53-47-(1)-1iyhprrq5e9tc.jpeg",
        "preco":18.90
    },
    {
        "id": 9,
        "nome": "SALADA GREGA",
        "descricao": "A salada grega é uma salada tradicional grega com os ingredientes característicos deste país. A salada original é feita com tomate, pepino, pimentão e cebola roxa. Temperada com sal, pimenta-do-reino, orégano e azeite. A tudo isto juntam-se pedaços de queijo feta, alcaparras e azeitonas kalamata.",
        "foto":"https://www.danone.pt/content/img/salada-grega.jpg",
        "preco":11.90
    }
]

app.use(express.json())

app.get('/marmitas', (req, res) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.send(itensCardapios)
})

app.get('/marmitas/:id', (req, res) => {
    let id = req.params.id
    res.send(itensCardapios[id])
})

app.get('/bebidas', (req, res) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.send(itensBebidas)
})

app.get('/saladas', (req, res)=>{
    res.header('Access-Control-Allow-Origin', '*');
    res.send(itensSaladas)
})

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000')
})

app.get('/equipamentos', (req, res) =>{})

app.get('/equipamentos/:categoria', (req, res) =>{})

app.get('/equipamentos/:categoria/:disponibilidade', (req, res) =>{})

