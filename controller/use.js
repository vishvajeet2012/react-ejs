exports.Homepagecontroler=(req,res)=>{
    res.send("this is router created vishu")
    

    }

    exports.filepagecontroler=(req,res) =>{
        res.render("index3.ejs")
    }

    exports.fromControler = (req, res) => {
        const { maintask } = req.body;
        // Process the data (e.g., save to database)
        
        // Send a response
        res.status(200).json({ message: "Data received successfully", data: req.body });
      };
      