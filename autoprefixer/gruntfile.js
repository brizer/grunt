module.exports = function(grunt){
	grunt.loadNpmTasks('grunt-autoprefixer');
	grunt.initConfig({
		pkg:grunt.file.readJSON('package.json'),
		autoprefixer:{
			options:{
				//任务设置
				browserslist:['last 2 versions','chrome','ie'],
				map:true,
			},
			//单文件任务
            single_file: {
                src: 'css/test.css',
                dest: 'result/test.css'
            },
            //多文件任务
            mutiple_files: {
            	expand: true,
                flatten: true,//是否取代原先文件名
            	src: 'cssB/*.css',
            	dest: './resultB/'
            }
		}
	});
	grunt.registerTask('default',[]);
};
