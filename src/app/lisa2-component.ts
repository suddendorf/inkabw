export class LISA2Component {
    public toDate(d: any): string {
     //   console.log(d);
        if (d != null) {
            if ( d instanceof Date) {
                return d.toLocaleDateString();
            } else if (d instanceof String) {
                let s: String = d;
                if (s.length > 0) {
                  d = new Date(s.toString());
                  return d.toLocaleDateString();
                }
            }
        }
        return '-';
    }

}
