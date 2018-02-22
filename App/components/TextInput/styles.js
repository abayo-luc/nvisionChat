import EStyleSheet from 'react-native-extended-stylesheet';
const INPUT_HEIGHT = 30;
const BORDER_RADIUS = 4;
const ICON_SIZE = 25;

const styles = EStyleSheet.create({
    text: {
        color: '$defaultPurple',
    },
    input:{
        color: '$pureWhite',
        height: INPUT_HEIGHT,
        width: 250,
        // flex: 1,
        fontSize: 18,
    },
    contentWraper: {
        alignItems: 'center',
        flexDirection: 'row',
    },
    icon: {
        tintColor: '$defaultPurple',
        height: ICON_SIZE,
        width: ICON_SIZE,
    },
    wraper: {
        marginHorizontal: 30,
    }
});

export default styles;