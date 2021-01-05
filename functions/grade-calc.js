// students score, total possible score
// 15/20 -> YOu got a C (75%)!

const getGrade = function (studentScore, totalScore) {
    if (typeof studentScore !== 'number' || typeof totalScore !== 'number'){
        throw Error('studentScore and totalScore must both be numbers')
    }

    const scorePercent = studentScore / totalScore * 100
    let letterGrade = 'A'
    if (scorePercent<90 && scorePercent >=80){
        letterGrade = 'B'
    } else if (scorePercent <80 && scorePercent >=70){
        letterGrade = 'C'
    } else if (scorePercent <70 && scorePercent >= 60){
        letterGrade = 'D'
    } else if (scorePercent <60){
        letterGrade = 'F'
    }

    return `${studentScore}/${totalScore} -> You got a ${letterGrade} (${scorePercent}%)!`
}

try {
    console.log(getGrade('100',100))
} catch (e) {
    console.log(e.message)
}