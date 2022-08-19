function getAge(date) {
    var today = new Date();
    var birthDate = new Date(date);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
}
function createNewUser(user) {
    const newUser = {
        ...user,
        balance: [],
        currentBalance: 0,
    }
    user.push(newUser)

    return newUser;
}

const createAccount = (req, res) => {
    const { name, birth, cpf } = req.body
    if (getAge(birth) < 18) { throw new Error('menor de 18') }

    const found = user.find(i => i.cpf === cpf)
    if (found) { throw new Error('Já existe') }

    const createdUser = createNewUser({ name, birth, cpf })

    res.send({ createdUser })
}