const request = axios.create({
    baseURL: "http://127.0.0.1:3000",
    withCredentials: true,
})
const checkId = document.querySelector("#checkId")
const checkNick = document.querySelector("#checkNick")
const userid = document.querySelector("#userid")
const nickname = document.querySelector("#nickname")

const checkHandler = async (e) => {
    // if (e.target.id == userid) {
    //     vari = userid
    // } else if (e.target.id == nickname) {
    //     vari = nickname
    // }
    let vari = e.target.id
    console.log(vari)
    const response = await request.get(`/check/?${vari}=${e.target.value}`)
    const { isCorrect } = response.data
    if (isCorrect) {
        checkId.style.color = "green"
        checkId.innerHTML = "√"
    } else {
        checkId.style.color = "red"
        checkId.innerHTML = "X"
    }
}

userid.addEventListener("input", checkHandler)
nickname.addEventListener("input", checkHandler)
