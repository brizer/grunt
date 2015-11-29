module.exports = function(grunt){
	require("matchdep").filterDev("grunt-*").forEach(grunt.loadNpmTasks);
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
		watch: {//文件保存时自动触发一系列任务
			html: {
				files: ['index.html'],
				tasks: ['htmlhint']
			},
			js: {
				//files: ['base.js'],
				files:['jquery.datagrid.js'],
				tasks: ['uglify']
			}
		},	
		htmlhint: {//html语法检测
			build: {
				options: {
					'tag-pair': true,
					'tagname-lowercase': true,
					'attr-lowercase': true,
					'attr-value-double-quotes': true,
					'doctype-first': true,
					'spec-char-escape': true,
					'id-unique': true,
					'head-script-disabled': true,
					'style-disabled': true
				},
				src: ['index.html']
			}
		},
		uglify: {//javascript压缩
			build: {
				files: {
					//'base.min.js': ['base.js']
					'jquery.datagrid.min.js':['jquery.datagrid.js']
				}
			}
		},
		cssmin: {
			options: {
				shorthandCompacting: false,
				roundingPrecision: -1
			},
			target: {
				files: {
					'output.css': ['test1.css', 'test2.css']
				}
			}
		}

    });
 
    grunt.registerTask('default', []);
 
};