//@desc Get all contacts
//@route Get /api/contacts
//@access public

const getContacts = (req, res) =>{
    res.status(200).json({message:"Get all the contacts"});
};

//@desc Create New contact
//@route post /api/contacts
//@access public

const createContacts = (req, res) =>{
    console.log("The request body is:",req.body);
    const {name,email,phone} = req.body;
    if(!name || !email || !phone){
        res.status(400);
        throw new Error("All Fields are mandatory!!!");
    }
    res.status(201).json({message:`Create contacts`});
};

//@desc Get Specific contact
//@route get /api/contacts/:id
//@access public

const getContact = (req, res) =>{
    res.status(201).json({message:`Get contact for ${req.params.id}`});
};


//@desc Updated  contact
//@route put /api/contacts/:id
//@access public

const updateContacts = (req, res) =>{
    res.status(201).json({message:`Updated contacts for  ${req.params.id}`});
};

//@desc Delete contact
//@route delete /api/contacts/:id
//@access public

const deleteContacts = (req, res) =>{
    res.status(201).json({message:`Delete contact for ${req.params.id}`});
};

module.exports = {getContacts,createContacts,getContact,updateContacts,deleteContacts};