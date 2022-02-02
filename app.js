const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const blogRoutes = require('./routes/blogRoutes');
const puppeteer = require('puppeteer')

// express app
const app = express();

// connect to mongodb & listen for requests
const dbURI = "mongodb+srv://inwerejosic1:WescoCable@my-blod-db.wawbt.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((result) => app.listen(3000))
  .catch(err => console.log(err));

// register view engine
app.set('view engine', 'ejs');

// middleware & static files
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use((req, res, next) => {
  res.locals.path = req.path;
  next();
});

// routes
app.get('/', (req, res) => {
  res.redirect('/blogs');
});

app.get('/about', (req, res) => {
  res.render('about', { title: 'About' });
});

// download the pdf based on ejs template
app.get("/download", async function (req, res) {
  const renderedData = await ejs.renderFile(`views/${details}.ejs`, DATA, {
    async: true,
  });

  try {
    // launch puppeteer to generate pdf file
    const browser = await puppeteer.launch({ args: ["--no-sandbox"] });
    const page = await browser.newPage();
    await page.setContent(renderedData);
    const pdfFile = await page.pdf({ format: "A4" });
    res.writeHead(200, {
      "Content-Disposition": `attachment; filename="${blog.lName}.pdf"`,
      "Content-Type": "application/pdf",
    });

    const download = Buffer.from(pdfFile, "base64");
    res.end(download);
  } catch (ex) {
    console.log(ex);
  }
});

// blog routes
app.use('/blogs', blogRoutes);

// 404 page
app.use((req, res) => {
  res.status(404).render('404', { title: '404' });
});
