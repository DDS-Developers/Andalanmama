export const localeDate = (d) => {
    if (d && typeof d.split) {
        const a = d.split(/[^0-9]/);
        const date = new Date (a[0],a[1]-1,a[2],a[3],a[4],a[5]);

        let i = date.getDate();
        let m = (Number(date.getMonth()) + Number(1));
        let y = date.getFullYear();
        let h = date.getHours();
        let x = date.getMinutes();

        if (Number.isNaN(i)) {
            return d;
        } else {
            if (i < 10) {
                i = '0' + i.toString();
            }

            if (m < 10) {
                m = '0' + m.toString();
            }

            if (h < 10) {
                h = '0' + h.toString();
            }

            if (x < 10) {
                x = '0' + x.toString();
            }


            const monthDesc = month();

            const dateFormat = i + ' ' + monthDesc[date.getMonth()] + ' ' + y;

            return dateFormat + ' ' + h + ':' + x;
        }
    } else {
        return d;
    }
}

export const month = () => {
    return ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'];
}