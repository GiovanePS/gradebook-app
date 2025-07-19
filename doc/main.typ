#set align(center)
#show link: underline

= Relatório do desenvolvimento do _Gradebook App_
=== Giovane Pimentel de Sousa
#datetime.today().display("[day]/[month]/[year]")

#set align(left)

\
== Introdução
Esse é um relatório do projeto _*Gradebook App*_, da
#link("https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures-v8/#review-js-fundamentals-by-building-a-gradebook-app")[#text(blue)[_*FreeCodeCamp*_]].
Tem como objetivo apresentar as soluções e raciocínios utilizados nos desafios
propostos.

== Desafios

=== Desafio 1
Para esse desafio, foi solicitado uma função que recebe um _array_ de _scores_
e retorna a média entre eles. Para isso, utilizei o método `reduce` para somar
os elementos e dividi pelo tamanho do _array_. Também implementei _error
handling_ e testes.

Seria possível iterar manualmente com um `for`, mas optei por usar `reduce`
para praticar mais recursos do JavaScript que não utilizo com frequência no meu
dia a dia com Golang.

=== Desafio 2
Aqui, bastou realizar uma validação básica dos _inputs_ e aplicar uma sequência
de `if`/`else` para retornar a _letter grade_ correspondente ao score.

=== Desafio 3
Aqui, poderia-se verificar diretamente se o _score_ é maior ou igual a 60 para
considerar como aprovado, mas como a regra de negócio depende da _letter
grade_, e não do número em si, utilizei a função `getGrade`. Assim, se a lógica
de conversão de score para letra mudar no futuro (por exemplo, se passar a
considerar 65 como limite), essa função continuará funcionando corretamente sem
precisar de alterações. Essa abordagem favorece a flexibilidade e a
manutenibilidade do código.

=== Desafio 4
Nessa último função, optei por não validar os _inputs_ novamente, já que as funções
chamadas (`getAverage` e `getGrade`) já realizam essa validação internamente.
Utilizei _template strings_ para montar a mensagem de saída de forma clara. A
parte final da _string_ é montada com base na _letter grade_, informando se o
aluno foi aprovado ou reprovado.

Foram feitos testes apenas para garantir que a mensagem de saída estivesse correta.
Não foram reescritos testes sobre a lógica de cálculo ou classificação, pois
esses já estão cobertos em testes específicos das funções responsáveis. Também
considerei se seria o caso de validar se a nota do aluno pertence às notas da
turma, mas como isso não foi especificado como uma regra de negócio, e não
afeta diretamente o objetivo da função, optei por não implementar essa
verificação.
