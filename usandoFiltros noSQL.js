//noSQL (usando filtros)

db.profs.insertOne( {nome:"Carol", idade:33 } )
db.profs.insertOne( { _id:23, nome: "Maria", idade: 40, Endereco: {rua:"Rua teste", numero:456} } )
db.profs.insertMany([{ nome:"Torres",idade: 30}, { _id:716, nome:"Silva",idade: 45} ])

//filtrar apenas pelo nome escrito
db.profs.find({nome:'Carol'})

//filtrar apenas com a primeira letra (ex. comecar com 'M')
db.profs.find({nome:/^M/})

//filtrar nomes apenas pelas letras do final (ex. acaba com 'a')
db.profs.find({nome:/a$/})

//filtrar todas as idades
db.profs.distinct("idade")

//atualiar a idade 
db.profs.updateMany({_id:23},{$set:{idade:41}})

//exibir tudo do id 23
db.profs.find({_id:23})