//quest 1
//A nota da neta de Valentina Medeiros de 15 anos na disciplina portugues foi digitada errada. Deve ser atualizada para 8,9.
db.turma.update({idade: 15, nome: 'Mariana Torres'}, {$set: {historico:{matematica:9.6, portugues:8.9, fisica: 8.1, ingles: 7.9}}})