export class LISA2Component {
    public toDate(d: any): string {
     //   console.log(d);
        if (d != null) {
            if (typeof d === "Date") {
                return d.toLocaleDateString();
            } else if (typeof d === "string") {
                let s: string = d;
                if (s.length > 0) {
                  d = new Date(s);
                  return d.toLocaleDateString();
                }
            }
        }
        return '-';
    }

}
