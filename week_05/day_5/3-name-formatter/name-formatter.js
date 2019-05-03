class NameFormatter {

  invertName(name) {

    const honorifics = [ 'Mr.', 'Mrs.', 'Ms.', 'Dr.'];

    if (name === undefined) {
      throw new Error("No name!");
    }

    if (name === '') {
      return '';
    }

    const names = name.split(' ').filter(name => {
      if(name) return name;
    });

    let fullName = '';

    if(honorifics.includes(names[0])){

      if(names.length === 1) return '';

      fullName += names[0];
      const onlyNames = names.splice(1);
      return fullName += ` ${this.invertName(onlyNames.join(' '))}`;
    }

    if(names.length === 1) return names[0];

    return `${names[1]}, ${names[0]}`;
  }
}

module.exports = NameFormatter;
