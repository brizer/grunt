module.exports = function(grunt){
	grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
		jshint:{
			all:['gruntfile.js','js/*.js'],
			options:{
				latedef:true,//变量定义前禁止使用
			}
		}
    });

    grunt.registerTask('default', []);

};