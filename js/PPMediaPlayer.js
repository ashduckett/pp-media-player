


class PPMediaPlayer {

    constructor(container) {
        const dummyData = [
            {
                title: 'Audio 1',
                description: 'Fabulous audio',
                type: 'audio',
                name: 'test_video',
                category: 'history'
            },
            {
                title: 'Video 2',
                description: 'Fabulous video',
                type: 'video',
                name: 'shrek',
                category: 'creation'
            },
            {
                title: 'Video 2',
                description: 'Fabulous video',
                type: 'video',
                name: 'test_video',
                category: 'history'
            },
            {
                title: 'Video 2',
                description: 'Fabulous video',
                type: 'video',
                name: 'shrek',
                category: 'history'
            },
            {
                title: 'Video 2',
                description: 'Fabulous video',
                type: 'video',
                name: 'shrek',
                category: 'creation'
            },
            {
                title: 'Video 2',
                description: 'Fabulous video',
                type: 'video',
                name: 'shrek',
                category: 'history'
            },
            {
                title: 'Video 2',
                description: 'Fabulous video',
                type: 'video',
                name: 'shrek',
                category: 'history'
            },
            {
                title: 'Video 2',
                description: 'Fabulous video',
                type: 'video',
                name: 'shrek',
                category: 'history'
            },
            {
                title: 'Video 2',
                description: 'Fabulous video',
                type: 'video',
                name: 'shrek',
                category: 'history'
            },
            {
                title: 'Video 2',
                description: 'Fabulous video',
                type: 'video',
                name: 'shrek',
                category: 'history'
            },
            {
                title: 'Video 2',
                description: 'Fabulous video',
                type: 'video',
                name: 'shrek',
                category: 'history'
            },
            {
                title: 'Video 2',
                description: 'Fabulous video',
                type: 'video',
                name: 'shrek',
                category: 'history'
            },
            {
                title: 'Video 2',
                description: 'Fabulous video',
                type: 'video',
                name: 'shrek',
                category: 'history'
            },
            {
                title: 'Video 2',
                description: 'Fabulous video',
                type: 'video',
                name: 'shrek',
                category: 'history'
            },
            {
                title: 'Video 2',
                description: 'Fabulous video',
                type: 'video',
                name: 'shrek',
                category: 'history'
            },
            {
                title: 'Video 2',
                description: 'Fabulous video',
                type: 'video',
                name: 'shrek',
                category: 'history'
            },
        ];

        this.container = container;
        this.currentFilter = 'histories';
        this.currentMediaType = dummyData[0].type;
        this.currentLayoutType = null;


        const mediaList = new PPMediaList(this);
        this.container.append(mediaList.getElement());

        // Now for the video section
        this.mediaContainer = document.createElement('div');
        this.mediaContainer.classList.add('pp-media-player-video-container');


        // Actual video element
        // this.video.controls = true;
        // this.video.classList.add('video');




        // A link for the slidey thing
        this.drawerToggle = document.createElement('a');
        this.drawerToggle.href = '#';
        this.drawerToggle.innerText = 'Open';

        this.mediaContainer.append(this.drawerToggle);

        // If we're starting with a video, display it
        // if (this.currentMediaType === 'video') {
        //     this.setVideo(dummyData[0]);
        // } else {
        //     this.setAudio(dummyData[0]);
        // }

        this.setMedia(dummyData[0]);



        this.mediaContainer.append(this.videoTitle);
        
        this.mediaContainer.append(this.videoDescription);

        this.container.append(this.mediaContainer);

        // We also need a slidey thing. This can be attached to the body I think.
        this.drawer = document.createElement('div');
        this.drawer.classList.add('drawer');

        this.closeBtn = document.createElement('a');
        this.closeBtn.href = '#';
        this.closeBtn.innerText = 'Close';

        this.closeBtn.addEventListener('click', () => {
            this.drawer.classList.remove('active');
        });

        this.drawer.append(this.closeBtn)

        const drawerMediaList = new PPMediaList(this);

        this.drawer.append(drawerMediaList.getElement());

        this.drawerToggle.addEventListener('click', () => {
            this.drawer.classList.add('active');
        });

        document.body.style.overflow = 'hidden';
        document.body.append(this.drawer);
    }

    setMedia(media) {

        if (media.type === 'video') {
            console.log('should be showing video')
        
            this.setVideo(media);
            this.video.play();
        } else {
            console.log('calling set audio')
            this.setAudio(media);
        }

        // this.currentMediaType = media.type;
    }



    setVideo(video) {
        console.log('setVideo called')
        console.log(this.currentLayoutType)
        if (this.currentLayoutType !== 'video') {
            this.video = document.createElement('video');
            this.mediaContainer.innerHTML = '';

            this.mediaContainer.append(this.drawerToggle);
            this.mediaContainer.append(this.video);

            // Add some labels to show the currently playing video
            this.videoTitle = document.createElement('h2');
            this.videoTitle.classList.add('video-title')
            this.videoDescription = document.createElement('p');
            this.videoDescription.classList.add('video-description');
            this.video.controls = true;
            this.video.classList.add('video');
            this.currentLayoutType = 'video';
            this.mediaContainer.append(this.videoTitle)
            this.mediaContainer.append(this.videoDescription)
            
        }
        
        // Set the source
        this.video.src = '../video/' + video.name + '.mp4';
        console.log('setting description')
        this.videoDescription.innerText = video.description;
        this.videoTitle.innerText = video.title;
        this.currentMediaType = 'video';
    }

    setAudio(audio) {
        if (this.currentLayoutType !== 'audio') {
            this.audioImage = document.createElement('img');
            this.audioImage.classList.add('audio-image')
            this.audio = document.createElement('audio');
            this.audio.classList.add('audio-controls')
            this.audio.controls = true;

            this.source = document.createElement('source');
            this.source.src = '../audio/audio.mp3';
            this.source.type = 'audio/mpeg';
            
            this.audio.append(this.source);
            this.mediaContainer.innerHTML = '';
            this.mediaContainer.append(this.drawerToggle);
            this.mediaContainer.append(this.audioImage);
            this.mediaContainer.append(this.audio);






            this.videoTitle = document.createElement('h2');
            this.videoTitle.classList.add('video-title')
            this.videoDescription = document.createElement('p');
            this.videoDescription.classList.add('video-description');
            this.mediaContainer.append(this.videoTitle)
            this.mediaContainer.append(this.videoDescription)
            this.currentLayoutType = 'audio';
        }

        this.audioImage.src = '../img/audio.jpg';
        this.videoDescription.innerText = audio.description;
        this.videoTitle.innerText = audio.title;
        this.currentMediaType = 'audio';


    }




}