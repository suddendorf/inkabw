export class LISA2Component {
    public toDate(d: Date): string {
        if (d != null) {
            if (d instanceof Date) {
                    return this.formatDate(d);
            } else if (d instanceof String) {
                let s: String = d;
                if (s.length > 0) {
                    d = new Date(s.toString());
                    return this.formatDate(d);
                }
            } else if (typeof d == 'string') {
                let s: string = d;
                if (s.length > 0) {
                    d = new Date(s.toString());
                    return this.formatDate(d);
                }
            }
        }
        return ' ';
    }
    public testDate(d: any): string {
        console.log(d);
        if (typeof d == 'string') {
            console.log('string');
        }
        return this.toDate(d);
    }
    formatDate(date: Date): string {
        var day = date.getDate();
        var monthIndex = date.getMonth()+1;
        var year = date.getFullYear();
        return day+"."+monthIndex+"."+year;
    }
}
