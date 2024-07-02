var servir = function(app,express,bodyParser,cors,path){
    app.use('/public', express.static(__dirname + '/public'));
    //app.use(express.static(path.join(__dirname, 'node_modules')));
    app.use(bodyParser.urlencoded({extended:false})); 
    app.use(express.urlencoded({extended: true}));
    app.use(express.json());
    app.use(express.text());
    app.use(cors());
    app.use((err, req, res, next) => {
        console.error(err.stack);
        res.status(500).send('¡Algo salió mal!');
    });
    app.get('/', function(req,res){
        res.sendFile(__dirname+'/views/index.html');
    });
};


module.exports = { servir };