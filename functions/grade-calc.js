// students score, total possible score
// 15/20 -> YOu got a C (75%)!

const getGrade = function (studentScore, totalScore) {
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

console.log(getGrade(90,100))