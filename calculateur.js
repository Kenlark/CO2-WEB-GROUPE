// Function Calculator for the emission of CO2
function calculationCO2Emition(distance,days) {
    const CO2EmitionPerWeek = 0.12 * distance * days
     window.alert('Votre emission de CO2 est de : '+ CO2EmitionPerWeek.toFixed(2) + ' kg CO2 par semaine')
 }

