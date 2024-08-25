  import express from "express";
  import bodyParser from "body-parser";

  const app = express();
  const port = 4000;

  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(express.static("public"))

  app.get("/", (req, res) => {
    res.render("index.ejs")
})
app.get("/Home", (req, res) => {
  res.render("index.ejs")
})
app.get("/Rules", (req, res) => {
  res.render("rules.ejs")
})
app.get("/Store", (req, res) => {
  res.render("store.ejs")
})
app.get("/Help", (req, res) => {
  res.render("help.ejs")
})
app.get("/About", (req, res) => {
  res.render("about.ejs")
})
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });
  app.get("/Helpline", (req, res) => {
    res.render("index.ejs");
  });
  app.post("/Helpline", (req, res) => {

    res.render("index.ejs",{});
  });
  const MaleNickname = [
    "Aaravettan", "Adiyachan", "Akashmon", "Amaran", "Aniyetta", "Arjunan", "Ashwettan", "Athichettan",
    "Bijumo", "Chandrettan", "Deepakutty", "Dineshettan", "Gangettan", "Gaura", "Gowrimon", "Harichettan", 
    "Harishan", "Jithumma", "Karthi", "Krishnan", "Lakshettan", "Madhuettan", "Madhuvan", "Mohanan",
    "Mukeshettan", "Narayanan", "Nikhilmon", "Niranjan", "Prakashan", "Pranu", "Raju", "Rakeshettan", 
    "Ranju", "Ravi", "Revachan", "Rohittan", "Sanju", "Sarathmo", "Shyam", "Sreekuttan", "Sreeju", 
    "Suhasmon", "Sunilmon", "Suryamo", "Tejachettan", "Varunettan", "Vasumon", "Vigneshan", "Vikramon", 
    "Vinayettan", "Vinodettan", "Vishnumon", "Yogi", "Abhiju", "Alokan", "Anupettan", "Balettan", "Charan", 
    "Gopi", "Maheshan", "Rahumo"
  ];
  const FemaleNickname = [
    "Anumol", "Anju", "Bhavani", "Devikuttan", "Devikutty", "Divya", "Indumol", "Lathima", "Manju", "Meera",
    "Nandumo", "Nayamol", "Nehamon", "Parvathi", "Priyettan", "Rekhamol", "Reshmol", "Saramon", "Seemachechi",
    "Shilpamol", "Shobhamol", "Sindhu", "Snehamol", "Sreelakshmy", "Swathima", "Ushachechi", "Vaishu", "Vidyettan",
    "Yamini", "Aishumma", "Archanamma", "Arpitha", "Asha", "Kavithamma", "Leelama", "Poojamol", "Vimala"
  ];
  
  const MaleSecoundname = [
    "Nair", "Menon", "Pillai", "Warrier", "Kurup", "Nambiar", "Panicker", "Chacko", "Varghese", "Mathew",
    "Thomas", "John", "Kumar", "Krishnan", "Reddy", "Sharma", "Iyer", "Iyengar", "Desai", "Patel",
    "Chatterjee", "Ghosh", "Basu", "Mitra", "Banerjee", "Sinha", "Sen", "Das", "Mukherjee", "Choudhury",
    "Mishra", "Nayak", "Patnaik", "Rao", "Joshi", "Kulkarni", "Deshmukh", "Naik", "Sawant", "Shetty",
    "Rao", "Singh", "Yadav", "Bhandari", "Mehta", "Parekh", "Doshi", "Shah", "Patil", "Chavan",
    "Gandhi", "Deshpande", "Kadam", "Phadke", "Thakur", "Verma", "Gupta", "Aggarwal", "Malhotra", "Kapoor",
    "Kohli", "Ahuja", "Batra", "Mehra", "Sethi", "Anand", "Bhatt", "Madhavan", "Nambiar", "Mundadan",
    "Raj", "Jain", "Agrawal", "Lal", "Nayyar", "Shukla", "Tripathi", "Varma", "Nayak", "Pandey",
    "Trivedi", "Shastri", "Upadhyay", "Kamble", "Patwardhan", "Karve", "Limaye", "Bhagwat", "Shivakumar", "Ranganathan",
    "Shankar", "Murthy", "Swaminathan", "Subramanian", "Narayanan", "Ramachandran", "Venkatesh", "Sundar", "Jayaraman", "Gokhale"
  ];
  
  const FemaleSecoundname = [
    "Nair", "Menon", "Pillai", "Warrier", "Kurup", "Nambiar", "Panicker", "Chacko", "Varghese", "Mathew",
    "Thomas", "John", "Kumar", "Krishnan", "Reddy", "Sharma", "Iyer", "Iyengar", "Desai", "Patel",
    "Chatterjee", "Ghosh", "Basu", "Mitra", "Banerjee", "Sinha", "Sen", "Das", "Mukherjee", "Choudhury",
    "Mishra", "Nayak", "Patnaik", "Rao", "Joshi", "Kulkarni", "Deshmukh", "Naik", "Sawant", "Shetty",
    "Rao", "Singh", "Yadav", "Bhandari", "Mehta", "Parekh", "Doshi", "Shah", "Patil", "Chavan",
    "Gandhi", "Deshpande", "Kadam", "Phadke", "Thakur", "Verma", "Gupta", "Aggarwal", "Malhotra", "Kapoor",
    "Kohli", "Ahuja", "Batra", "Mehra", "Sethi", "Anand", "Bhatt", "Madhavan", "Nambiar", "Mundadan",
    "Raj", "Jain", "Agrawal", "Lal", "Nayyar", "Shukla", "Tripathi", "Varma", "Nayak", "Pandey",
    "Trivedi", "Shastri", "Upadhyay", "Kamble", "Patwardhan", "Karve", "Limaye", "Bhagwat", "Shivakumar", "Ranganathan",
    "Shankar", "Murthy", "Swaminathan", "Subramanian", "Narayanan", "Ramachandran", "Venkatesh", "Sundar", "Jayaraman", "Gokhale"
  ];
  