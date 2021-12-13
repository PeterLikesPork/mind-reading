console.log('Proyek Peter :)')
console.log('You might need a calculator on this one.')

var indonesian = [
    'Saya akan membaca pikiran anda/teman-teman. Klik \'next\' untuk melanjutkan.',
    'Pilihlah bilangan acak dari 1 sampai 10!',
    'Kalikan bilangan tersebut dengan 2!',
    'Jumlahkan bilangan tersebut dengan 8!',
    'Bagi bilangan tersebut dengan 2!',
    'Sekarang, kurangi bilangan baru tersebut, dengan bilangan awal (bilangan yang dipilih dari 1 sampai 10).',
    'Kemudian, ubah bilangan tersebut menjadi huruf alfabet (1 -> a, 2 -> b, 3 -> c, 4 -> d, 5 -> e, dst).',
    'Pikirkan tentang nama negara yang huruf depannya huruf yang tadi.',
    'Ambil huruf kedua dari negara tersebut, lalu pikirkan tentang nama hewan yang mulai dengan huruf tersebut, tetapi nama bahasa Inggris.',
    'Saya akan menebak hewan anda/teman-teman setelah siap.',
    'Hewan tersebut adalah... \'Elephant\' (Gajah)!',
    '(Jika triknya ketahuan, jangan beri tahu. Pesulap yang baik tidak pernah membocorkan rahasianya 😊.)',
    'Klik tombol next lagi untuk mengulang.'
]

var english = [
    'I\'m gonna read your mind, through the screen. Click \'next\' to continue.',
    'To start off, choose a random number between 1 and 10.',
    'Multiply that number by 2.',
    'Add 8 to the new number.',
    'Divide that number by 2.',
    'Now, subtract that new number, with the first number (the chosen number from 1 to 10).',
    'Then, convert that number to a letter as shown right (1 -> a, 2 -> b, 3 -> c, 4 -> d, 5 -> e, etc).',
    'Think of a country that starts with that letter.',
    'Take the second letter of that country, then think of an animal that starts with that letter, on english.',
    'I\'ll guess your animal after you\'re ready.',
    'Your animal is... \'Elephant\' !',
    '(If you caught me, don\'t tell the others. A great magician never tell his/her secrets 😊.)',
    'Click the next button again to do it again!'
]

var num = 0

const updateText = () => {
    document.querySelector('ina').innerHTML = indonesian[num]
    document.querySelector('en').innerHTML = english[num]
}

updateText()

const next = () => {
    num++
    num = num % indonesian.length
    updateText()
}
