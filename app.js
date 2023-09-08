const express = require('express');

const app = express();
const port = 5000;

app.use(express.json());

app.get('/bfhl', (req, res) => {
    res.status(200).json({ "operation_code": 1 });
});

app.post('/bfhl', (req, res) => {
    const { data } = req.body;
    const user_id = 'aditya_29012000';
    const email = 'aa5454@srmist.edu.in';
    const roll_number = 'RA2011027020108';
    if(!data) {
        return res.status(400).json({
            "is_success": false,
            "user_id": user_id,
            "email": email,
            "roll_number": roll_number,
            "number": [],
            "alphabets": [],
            "highest_alphabet": []
        });
    }
    const numArray = data.filter((item) => {
        const conv = +item;
        if (conv) {
            return true;
        } else {
            return false;
        }
    });
    const alphaArray = data.filter((item) => {
        const conv = +item;
        if (conv) {
            return false;
        } else {
            return true;
        }
    });
    let highestAlpha = '\0';
    alphaArray.forEach(element => {
        if(element > highestAlpha)
            highestAlpha = element;
    });
    const highestAlphaArray = [];
    if(highestAlpha !== '\0') {
        highestAlphaArray[0] = highestAlpha;
    }
    console.log(highestAlphaArray);
    res.status(201).json({
        "is_success": true,
        "user_id": user_id,
        "email": email,
        "roll_number": roll_number,
        "numbers": numArray,
        "alphabets": alphaArray,
        "highest_alphabet": highestAlphaArray
    });
});

app.listen(port, () => {
    console.log(`Server started running at: http://localhost:${port}`);
});
