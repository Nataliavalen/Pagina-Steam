document.getElementById('imcForm').addEventListener('submit', function(e) {
    e.preventDefault();

    let height = parseFloat(document.getElementById('height').value.replace(',', '.')) / 100; 
    let weight = parseFloat(document.getElementById('weight').value.replace(',', '.'));
    
    if (height > 0 && weight > 0) {
        let imc = (weight / (height * height)).toFixed(2);
        let resultText = `Este es tu IMC: ${imc}. `;
        
        if (imc < 18.5) {
            resultText += 'Estás bajo de peso.';
        } else if (imc >= 18.5 && imc < 24.9) {
            resultText += 'Tienes un peso normal.';
        } else if (imc >= 25 && imc < 29.9) {
            resultText += 'Tienes sobrepeso.';
        } else {
            resultText += 'Tienes obesidad.';
        }


        Swal.fire({
            title: "Resultado de IMC",
            text: resultText,
            imageUrl: "https://staticnew-prod.topdoctors.mx/files/Image/large/a7af528584b6475633cf9caf0b525518.jpeg", 
            imageWidth: 400,
            imageHeight: 200,
            imageAlt: "Custom image",
        });

    } else {
        Swal.fire({
            title: "Error",
            text: "Por favor, ingresa valores válidos.",
            icon: "error",
        });
    }
});

