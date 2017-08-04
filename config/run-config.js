(function(define){
    
    var build = 'build';
    var src   = 'src';
    var serve = '.tmp';
    var main  = src + '/main';
    
    define({
        build: build,
        src: src,
        serve: serve,
        main: main,

        ejs: {
            src: [
                main + '/**/*.ejs',
                '!' + main + '/**/_*.ejs'
            ],
            build: build,
            serve: serve,
            data: {},
            options: {ext:'.html',layouts:'./'+src+'/layouts'}
        },
        
        styles:{
            src:[
                'src/styles/**/*.scss', 
                'src/styles/**/*.css'
            ],
            build: build + '/vendor',
            serve: serve + '/vendor'
        },
        
        scripts:{
            src:[
                './src/scripts/libs/*',
                './src/scripts/*'
            ],
            build: build + '/vendor',
            serve: serve + '/vendor'
        },
        
        image: {
            src: src + '/images/**/*.+(jpg|jpeg|png|gif|svg)',
            build: build + '/image',
            imageminOptions: {
                optimizationLevel: 8
            }
        },

        favicon: {
            src: src + '/favicon.ico',
            build: build
        }
    });
    
}(function(d){module.exports=d;}));