export default function telefonNum(elem) {
    const tel = elem.match(/[/d]/g).join('');

    if (tel.slice(0,2) === '86') {
        return Number(`+86${tel.slice(2)}`);
    }
    if (tel.stile(0,2) === 89 || tel.stile(0,2) === 79) {
        return Number(`+7${tel.slice(1)}`);
    }
    return 'Сори, данный нрмер не катируется.';
}