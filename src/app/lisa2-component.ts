export class LISA2Component {
    public toDate(d: Date): string {
        if (d != null) {
            if (d instanceof Date) {
                return d.toLocaleDateString();
            } else if (d instanceof String) {
                let s: String = d;
                if (s.length > 0) {
                    d = new Date(s.toString());
                    return d.toLocaleDateString();
                }
            } else if (typeof d == 'string') {
                let s: string = d;
                if (s.length > 0) {
                    d = new Date(s.toString());
                    return d.toLocaleDateString();
                }
            }
        }
        return '-';
    }
    public testDate(d: any): string {
        console.log(d);
        if (typeof d == 'string') {
            console.log('string');
        }
        return this.toDate(d);
    }
}
