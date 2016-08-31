function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name)
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`;
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0) {return "There is nobody waiting to be served!"
  } else {
    var next = katzDeliLine.shift();
    return `Currently serving ${next}.`;
  }
}

function currentLine(katzDeliLine) {
  if (katzDeliLine.length === 0) {return "The line is currently empty."
  } else {
    var message = "The line is currently: "
    katzDeliLine.forEach( function(person, i) {
      message += `${i + 1}. ${person}, `;
    });
  }
    return message.slice(0, -2);
}
