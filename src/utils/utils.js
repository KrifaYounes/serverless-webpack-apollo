export default function getIdLabelByCivility(civility) {

    if(civility ==='MRS') {
        return 'passengers.miss';
    } else {
        return 'passengers.mister'
    }
}
