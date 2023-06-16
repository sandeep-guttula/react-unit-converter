const units = (input, option1, option2) => {
    const options = ['Centimeter','Inches','Meter','Kilometer']

    if (option1 === option2){
        return input
    } else if (option1 === 'Centimeter' && option2 === 'Meter' ){
        return input*0.01
    } else if (option1 === 'Centimeter' && option2 === 'Inches' ){
        return input*0.3937008
    } else if (option1 === 'Centimeter' && option2 === 'Kilometer' ){
        return input*0.00001
    } else if (option1 === 'Inches' && option2 === 'Centimeter' ){
        return input*2.54
    } else if (option1 === 'Inches' && option2 === 'Meter' ){
        return input/39.37
    } else if (option1 === 'Inches' && option2 === 'Kilometer' ){
        return input/39370
    } else if (option1 === 'Meter' && option2 === 'Centimeter' ){
        return input*100
    } else if (option1 === 'Meter' && option2 === 'Inches' ){
        return input/39.37
    } else if (option1 === 'Meter' && option2 === 'Kilometer' ){
        return input/1000
    } else if (option1 === 'Kilometer' && option2 === 'Centimeter' ){
        return input*100000
    } else if (option1 === 'Kilometer' && option2 === 'Inches' ){
        return input*39370
    } else if (option1 === 'Kilometer' && option2 === 'Meter' ){
        return input*1000
    } else {
        return 'Error'
    }
}

export default units