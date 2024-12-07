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


class PPMediaList {
    constructor(player) {
        this.currentFilter = 'histories';
        this.player = player;



        this.mediaListWrapper = document.createElement('div');
        this.mediaListWrapper.classList.add('pp-media-player-list-wrapper');


        // To the wrapper I want to add something to the top which is going to be another div
        this.mediaListFilterContainer = document.createElement('div');
        this.mediaListFilterContainer.classList.add('pp-media-player-list-filter-container');




        this.optionHistories = document.createElement('input');
        this.optionHistories.type = 'radio';
        this.optionHistories.name = 'filter';
        this.optionHistories.value = 'histories';
        this.optionHistories.classList.add('option-filter');
        this.optionHistories.checked = true;

        this.optionHistoriesLabel = document.createElement('label');
        this.optionHistoriesLabel.innerText = 'Histories';
        this.optionHistoriesLabel.classList.add('selected');
        this.optionHistoriesLabel.append(this.optionHistories);
        

        this.mediaListFilterContainer.append(this.optionHistoriesLabel);


        this.optionCreation = document.createElement('input');
        this.optionCreation.type = 'radio';
        this.optionCreation.name = 'filter';
        this.optionCreation.value = 'creations';
        this.optionCreation.classList.add('option-filter');

        this.optionCreationLabel = document.createElement('label');
        this.optionCreationLabel.innerText = 'Creations';
        this.optionCreationLabel.append(this.optionCreation);
        

        const radioOptions = [this.optionHistories, this.optionCreation];
        

        // Now just get an event to fire when an option changes, which will be through the label

        for (let radioOption of radioOptions) {
            radioOption.addEventListener('change', () => {

                for (let option of radioOptions) {
                    option.parentElement.classList.remove('selected');
                }

                radioOption.parentElement.classList.add('selected');
                this.currentFilter = radioOption.value;
                this.updateList(radioOption.value);
            });
        }

        this.mediaListFilterContainer.append(this.optionCreationLabel);
        this.mediaListWrapper.append(this.mediaListFilterContainer);
        this.mediaList = document.createElement('ul');
        this.mediaList.classList.add('pp-media-player-list');

        this.updateList(this.currentFilter);

        this.mediaListWrapper.append(this.mediaList);
        // return this.mediaListWrapper;    
    }

    getElement() {
        return this.mediaListWrapper;
    }

    updateList() {
        const filter = this.currentFilter === 'histories' ? 'history' : 'creation';
        const data = dummyData.filter(item => item.category === filter);
        this.mediaList.innerHTML = '';
        
        for (let item of data) {
            this.mediaList.append(this.getListItem(item.title, item.description, item.type, item.name));
        }
    }



    getListItem(title, description, type, videoName) {
        const listItem = document.createElement('li');

        const listItemLink = document.createElement('a');
        listItemLink.href = '#';


        const listItemHeader = document.createElement('h2');
        const listItemDescription = document.createElement('p');

        listItemHeader.innerText = title;
        listItemDescription.innerText = description;


        listItemLink.append(listItemHeader);
        listItemLink.append(listItemDescription);

        listItem.append(listItemLink);


        listItemLink.addEventListener('click', () => {
            console.log('title', title);
            console.log('description', description);
            console.log('media name', videoName);
            console.log('media type', type)
            // this.player.videoTitle.innerText = title;
            // this.player.videoDescription.innerText = description;
            // this.player.video.src = '../video/' + videoName + '.mp4';
            
            // console.log('calling setMedia')
            this.currentMediaType = type;
            this.player.setMedia({ title, description, type, name: videoName });
            // this.player.setVideo({ title, description, type, name: videoName });



            // this.player.video.play();
            //     this.videoTitle.innerText = title;
        //     this.videoDescription.innerText = description;
        //     this.video.src = '../video/' + videoName + '.mp4';
        //     this.video.play();
        });
        
        return listItem;
    }
}