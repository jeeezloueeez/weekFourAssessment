const complimentBtn = document.getElementById("complimentButton")
const fortuneBtn = document.getElementById('fortuneButton')
const encourageBtn = document.querySelector('#encourageButton')
const inspireBtn = document.querySelector('#inspireButton')
const helpfulBtn = document.querySelector('#helpfulButton')


const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

const getFortune = () => {
    axios
        .get('http://localhost:4000/api/fortune/')
        .then(res => {
            const data = res.data
            alert(data)
        })
        .catch(err => {console.log(err)})
}

const encourage = () => {
    axios
        .get('http://localhost:4000/api/encourage/')
        .then(res => {
            const data = res.data
            alert(data)
        })
        .catch(err => {console.log(err)})
}

const inspire = () => {
    axios
        .get('http://localhost:4000/api/inspire/')
        .then(res => {
            const data = res.data
            alert(data)
        })
        .catch(err => {console.log(err)})
}

const help = () => {
    axios
        .get('http://localhost:4000/api/help/')
        .then(res => {
            const data = res.data
            alert(data)
        })
        .catch(err => {console.log(err)})
}

let colorChange = (evt) => {
    evt.target.style.backgroundColor = 'black'
    evt.target.style.color = 'white'
}

let colorRevert = (evt) => {
    evt.target.style.backgroundColor = ''
    evt.target.style.color = 'black'
}

let sizeChange = (evt) => {
    evt.target.height = '50px'
}

complimentBtn.addEventListener('click', getCompliment)
complimentBtn.addEventListener('mouseover', colorChange)
complimentBtn.addEventListener('mouseout', colorRevert)

fortuneBtn.addEventListener('click', getFortune)
fortuneBtn.addEventListener('mouseover', colorChange)
fortuneBtn.addEventListener('mouseout', colorRevert)

encourageBtn.addEventListener('click', encourage)
encourageBtn.addEventListener('mouseover', colorChange)
encourageBtn.addEventListener('mouseout', colorRevert)

inspireBtn.addEventListener('click', inspire)
inspireBtn.addEventListener('mouseover', colorChange)
inspireBtn.addEventListener('mouseout', colorRevert)

helpfulBtn.addEventListener('click', help)
helpfulBtn.addEventListener('mouseover', colorChange)
helpfulBtn.addEventListener('mouseout', colorRevert)