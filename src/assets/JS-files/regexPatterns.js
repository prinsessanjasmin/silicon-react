export const emailPattern = new RegExp(
    '^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$'
);

export const fullNamePattern = /^(?=.{4,100}$)([a-zA-ZåäöÅÄÖ][\w'.\-]*\s+){1,5}[a-zA-ZåäöÅÄÖ][\w'.\-]*$/i;
