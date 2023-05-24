/* 
  Dada uma lista de pacientes, descubra o IMC de cada paciente e imprima

  "Paciente X possui o IMC de: Y"

  Onde X é o nome do paciente e Y é o IMC desse paciente

  Crie uma função para fazer o cálculo de IMC
*/

// Dados de entrada do usuário
// peso e altura

// Váriaveis da aplicação
// imc, nome, alutra

// Tratamento de dados e estrutra de dados
// função IMC, laço de repetição, alert()

/* IMC = peso / (altura * altura) */

const patients = [
  {
    name: 'Lucas F. de Lima',
    age: 23,
    Weight: 73,
    height: 168
  },
  {
    name: 'Jhenifer Souza',
    age: 18,
    Weight: 50,
    height: 160
  },
  {
    name: 'Andressa Andrade',
    age: 28,
    Weight: 60,
    height: 175
  }
]

// for (const pacient of patients) {
//   let imc = getIMC(pacient.Weight, pacient.height)
//   alert(`Paciente ${pacient.name} possui o IMC de: ${imc}`)
// }

for (const patient of patients) {
  let imc = getIMC(patient.Weight, patient.height)
  alert(`O paciente ${patient.name} possui o IMC de: ${imc}`)
}

// patients.forEach(patient => {
//   printPatientIMC(patient)
// })

function getIMC(Weight, height) {
  let imc = Weight / (height / 100) ** 2
  return imc.toFixed(2)
}

function printPatientIMC(patient) {
  let imc = getIMC(patient.Weight, patient.height)
  alert(`O paciente ${patient.name} possui o IMC de: ${imc}`)
}
