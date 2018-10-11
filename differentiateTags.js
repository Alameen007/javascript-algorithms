const style = {
    display: 'inline-block',
    whiteSpace: 'nowrap',
    padding: '5px 10px',
    background: '#7A57D1',
    color: '#FFF',
    fontSize: '12px',
    marginBottom: '-20px',
}

const tags = [{
        name: 'Sternum',
        tag: 'Sternum',
        category: 'Sternum',
        style: {...style},
    },
    {
        name: 'Cranium',
        tag: 'Cranium',
        category: 'dragSec',
        style: {...style},
    },
    {
        name: 'Clavicle',
        tag: 'Clavicle',
        category: 'dragSec',
        style: {...style},
    },
    {
        name: 'Ribs',
        tag: 'Ribs',
        category: 'dragSec',
        style: {...style},
    },
    {
        name: 'Humerus',
        tag: 'Humerus',
        category: 'dragSec',
        style: {...style},
    },
    {
        name: 'Ulna',
        tag: 'Ulna',
        category: 'dragSec',
        style: {...style},
    },
    {
        name: 'Radius',
        tag: 'Radius',
        category: 'dragSec',
        style: {...style},
    },
    {
        name: 'Carpals',
        tag: 'Carpals',
        category: 'dragSec',
        style: {...style},
    },
    {
        name: 'Phalanges Hand',
        tag: 'PhalangesHand',
        category: 'PhalangesHand',
        style: {...style},
    },
    {
        name: 'Femur',
        tag: 'Femur',
        category: 'dragSec',
        style: {...style},
    },
    {
        name: 'Tibia',
        tag: 'Tibia',
        category: 'Tibia',
        style: {...style},
    },
    {
        name: 'Fibula',
        tag: 'Fibula',
        category: 'dragSec',
        style: {...style},
    },
    {
        name: 'Tarsals',
        tag: 'Tarsals',
        category: 'dragSec',
        style: {...style},
    },
    {
        name: 'Phalanges Foot',
        tag: 'PhalangesFoot',
        category: 'PhalangesFoot',
        style: {...style},
    },
    {
        name: 'Sacrum Coccyx',
        tag: 'SacrumCoccyx',
        category: 'dragSec',
        style: {...style},
    },
    {
        name: 'Pelvic Girdle',
        tag: 'PelvicGirdle',
        category: 'PelvicGirdle',
        style: {...style},
    },
    {
        name: 'Lumbar Vertebrae',
        tag: 'LumbarVertebrae',
        category: 'dragSec',
        style: {...style},
    },
    {
        name: 'Thoracic Vertebrae',
        tag: 'ThoracicVertebrae',
        category: 'ThoracicVertebrae',
        style: {...style},
    },
    {
        name: 'Scapula',
        tag: 'Scapula',
        category: 'Scapula',
        style: {...style},
    },
    {
        name: 'Cervical',
        tag: 'Cervical',
        category: 'Cervical',
        style: {...style},
    },
]


function differentiateTags(arr) {

    for (let i = 0; i < arr.length; i++) {
        if (arr[i].tag === arr[i].category) {
            arr[i].style.background = 'green';
        } else {
            arr[i].style.background = 'red';
        }
        
    }
    return arr;
}

console.log(differentiateTags(tags))