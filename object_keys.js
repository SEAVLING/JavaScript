let students = {
    No: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    Name: ["Korat Nath", "Bouen Mno", "Phal Seakngim", "Phal Chengngor", "Phal Kimchhean", 
    "Kim Lina", "Kim Lyhour", "Khem Chanta", "Seng Danvan", "Prom Sreylin"], 
    Gender: ["Male", "Male", "Female", "Female", "Male", "Female", "Male", "Female", "Female", "Female"],
    DOB: [2001, 2001, 2002, 2005, 2009, 2010, 2004, 2000, 2001, 2000],
    Address: ["Seim Reab", "Takeo", "Kandal", "Kandal", "Kandal", "Kandal", "Kandal", "Kandal", "Preyveng", "Phnom Penh"]
}

let data_key = Object.keys(students)

for (let i = 0; i < students[data_key[0]].length; i++) {
    
    console.log(`${students.No[i]}. ${students.Name[i]}, ${students.Gender[i]}, ${students.DOB[i]}, ${students.Address[i]}`)
}
