//quest 2
//Quantos são os alunos que moram com os pais e tem 15 anos ou mais?
db.turma.count({idade: {$gte: 15}, moracompais: true})