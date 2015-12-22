module.exports = function(grunt){
	grunt.loadNpmTasks('grunt-css-sprite');
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
		sprite: {
			options: {
				// sprite����ͼԴ�ļ��У�ֻ��ƥ���·���Żᴦ��Ĭ�� images/slice/
				imagepath: 'test/slice/',
				// ӳ��CSS�б���·����֧�ֺ��������飬Ĭ��Ϊ null
				imagepath_map: null,
				// ѩ��ͼ���Ŀ¼��ע�⣬�Ḳ��֮ǰ�ļ���Ĭ�� images/
				spritedest: 'test/publish/images/',
				// �滻��ı���·����Ĭ�� ../images/
				spritepath: '../images/',
				// ��ͼƬ���࣬�������Ϊ��������ǿ��+1�Ա�֤���ɵ�2xͼƬΪż����ߣ�Ĭ�� 0
				padding: 2,
				// �Ƿ�ʹ�� image-set ��Ϊ2xͼƬʵ�֣�Ĭ�ϲ�ʹ��
				useimageset: false,
				// �Ƿ���ʱ���Ϊ�ļ��������µ�ѩ��ͼ�ļ������������ע������֮ǰ���ɵ��ļ���Ĭ�ϲ��������ļ�
				newsprite: false,
				// ��ѩ��ͼ׷��ʱ�����Ĭ�ϲ�׷��
				spritestamp: true,
				// ��CSS�ļ�ĩβ׷��ʱ�����Ĭ�ϲ�׷��
				cssstamp: true,
				// Ĭ��ʹ�ö��������������㷨
				algorithm: 'binary-tree',
				// Ĭ��ʹ��`pixelsmith`ͼ��������
				engine: 'pixelsmith'
			},
			autoSprite: {
				files: [{
					// ���ö�̬��չ
					expand: true,
					// css�ļ�Դ���ļ���
					cwd: 'test/css/',
					// ƥ�����
					src: '*.css',
					// ����css��sprite��·����ַ
					dest: 'test/publish/css/',
					// ������css��
					ext: '.sprite.css'
				}]
			}
		}
    });

    grunt.registerTask('default', []);

};