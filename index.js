const express = require('express'),
      bodyParser = require('body-parser'),
      mongoose = require('mongoose'),
      port = 3000,
      app = express()

const epsRoutes = require('./routes/epsRoutes'),
      personasRoutes = require('./routes/personasRoutes')

mongoose.connect('mongodb+srv://mongodb:mongodb@cluster0.slthj.mongodb.net/rutas_medicas?retryWrites=true&w=majority',
		 {useNewUrlParser: true, useUnifiedTopology: true})

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

app.use('/eps', epsRoutes)
app.use('/personas', personasRoutes)

app.listen(port, () => {
    console.log("Server is listening at port:" + port)
})
