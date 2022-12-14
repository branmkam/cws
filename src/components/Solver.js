export default function Solver(props) {
    let txt = ''
    fetch('../wordlist.txt')
    .then(response => response.text())
    .then(text => console.log(text))
    return txt
}