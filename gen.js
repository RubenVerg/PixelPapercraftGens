// The Color class.
class Color {
	/**
	 * @param {Number} c 
	 */
	constructor(c = 15) {
		this.color = c;
	}
	// The default color, white.
	color = 0xF;
	// toString-ing returns the full name of the color.
	toString = function() {
		switch (this.color) {
			case 0x0: return 'Black';
			case 0x1: return 'Red';
			case 0x2: return 'Green';
			case 0x3: return 'Brown';
			case 0x4: return 'Blue';
			case 0x5: return 'Purple';
			case 0x6: return 'Cyan';
			case 0x7: return 'Light Gray';
			case 0x8: return 'Gray';
			case 0x9: return 'Pink';
			case 0xA: return 'Lime';
			case 0xB: return 'Yellow';
			case 0xC: return 'Light Blue';
			case 0xD: return 'Magenta';
			case 0xE: return 'Orange';
			case 0xF: return 'White';
		}
	}
}

/**
 * @param {Number} id 
 */
function c(id) {return new Color(id)}

// The Pattern class.
class Pattern {
	/**
	 * @param {String} p 
	 */
	constructor(p = 'x') {
		this.pattern = p;
	};
	// toString-ing returns the name of the pattern.
	toString = function() {
		switch (this.pattern) {
			case 'x'  : return 'None';
			case 'bs' : return 'Bottom Stripe (Base)';
			case 'ts' : return 'Top Stripe (Chief)';
			case 'ls' : return 'Left Stripe (Pale Dexter)';
			case 'rs' : return 'Right Stripe (Pale Sinister)';
			case 'cs' : return 'Center Stripe, Vertical (Pale)';
			case 'ms' : return 'Middle Stripe, Horizontal (Fess)';
			case 'drs': return 'Down-Right Stripe (Bend)';
			case 'dls': return 'Down-Left Stripe (Bend Sinister)';
			case 'ss' : return 'Small Stripes, Vertical (Paly)';
			case 'cr' : return 'Diagonal Cross (Saltire)';
			case 'sc' : return 'Cross';
			case 'ld' : return 'Left of Down-Left Diagonal (Per Bend Sinister)';
			case 'rud': return 'Right of Down-Right Diagonal (Per Bend)';
			case 'lud': return 'Left of Down-Right Diagonal (Per Bend Inverted)';
			case 'rd' : return 'Right of Down-Left Diagonal (Per Bend Sinister Inverted)';
			case 'vh' : return 'Vertical Left Half (Per Pale)';
			case 'vhr': return 'Vertical Right Half (Per Pale Inverted)';
			case 'hh' : return 'Horizontal Top Half (Per Fess)';
			case 'hhb': return 'Horizontal Bottom Half (Per Fess Inverted)';
			case 'bl' : return 'Bottom Left Corner (Base Dexter Canton)';
			case 'br' : return 'Bottom Right Corner (Base Sinister Canton)';
			case 'tl' : return 'Top Left Corner (Chief Dexter Canton)';
			case 'tr' : return 'Top Right Corner (Chief Sinister Canton)';
			case 'bt' : return 'Bottom Triangle (Chevron)';
			case 'tt' : return 'Top Triangle (Inverted Chevron)';
			case 'bts': return 'Bottom Triangle Sawtooth (Base Indented)';
			case 'tts': return 'Top Triangle Sawtooth (Chief Indented)';
			case 'mc' : return 'Middle Circle (Roundel)';
			case 'mr' : return 'Middle Rhombus (Lozenge)';
			case 'bo' : return 'Border (Bordure)';
			case 'cbo': return 'Curly Border (Bordure Indented)';
			case 'bri': return 'Brick (Field Masoned)';
			case 'gra': return 'Gradient, Top (Gradient)';
			case 'gru': return 'Gradient, Bottom (Base Gradient)';
			case 'cre': return 'Creeper (Creeper Charge)';
			case 'sku': return 'Skull (Skull Charge)';
			case 'flo': return 'Flower (Flower Charge)';
			case 'moj': return 'Mojang (Thing)';
			case 'glb': return 'Globe';
		}
	};
	// id is a function used in finding the pattern position.
	id = function() {
		switch (this.pattern) {
			case 'x'  : return 0x00;
			case 'bs' : return 0x01;
			case 'ts' : return 0x02;
			case 'ls' : return 0x03;
			case 'rs' : return 0x04;
			case 'cs' : return 0x05;
			case 'ms' : return 0x06;
			case 'drs': return 0x07;
			case 'dls': return 0x08;
			case 'ss' : return 0x09;
			case 'cr' : return 0x0A;
			case 'sc' : return 0x0B;
			case 'ld' : return 0x0C;
			case 'rud': return 0x0D;
			case 'lud': return 0x0E;
			case 'rd' : return 0x0F;
			case 'vh' : return 0x10;
			case 'vhr': return 0x11;
			case 'hh' : return 0x12;
			case 'hhb': return 0x13;
			case 'bl' : return 0x14;
			case 'br' : return 0x15;
			case 'tl' : return 0x16;
			case 'tr' : return 0x17;
			case 'bt' : return 0x18;
			case 'tt' : return 0x19;
			case 'bts': return 0x1A;
			case 'tts': return 0x1B;
			case 'mc' : return 0x1C;
			case 'mr' : return 0x1D;
			case 'bo' : return 0x1E;
			case 'cbo': return 0x1F;
			case 'bri': return 0x20;
			case 'gra': return 0x21;
			case 'gru': return 0x22;
			case 'cre': return 0x23;
			case 'sku': return 0x24;
			case 'flo': return 0x25;
			case 'moj': return 0x26;
			case 'glb': return 0x27;
		}
	};
	// The default pattern, none.
	pattern = 'x'
}

/**
 * @param {Number} id 
 */
function p(id) {return new Pattern(id)}

// The finished banner.
class Banner {
	/**
	 * @param {Color} b 
	 * @param {Array<Pattern>} p 
	 */
	constructor(b, p) {
		this.base = b;
		this.patterns = p;
	};
	base = c();
	patterns = [];
	render = function() {
		// Draw the background
		Generator.drawImage('Lower');
		// Draw the base
		Generator.drawImage('Bases', basePos(this.base), {x: 174, y: 141, w: 336, h: 336});
		// Draw the patterns
		for (let i in this.patterns) {
			Generator.drawImage('Patterns', pos(i[1], i[0]), patPos);
		}
	}
}

// Pattern position finder (in map)
/**
 * @param {Color} c 
 * @param {Pattern} p 
 */
function pos(c, p) {
	return {x: c.color * 40, y: p.id() * 20, w: 20, h: 40};
}

// Base position finder (in map)
/**
 * @param {Color} c 
 */
function basePos(c) {
	return {x: 0, y: c.color * 42, w: 42, h: 42};
}

// A list of the 16 colors which exist.
const colors = [
	c(0x0), 
	c(0x1), 
	c(0x2), 
	c(0x3), 
	c(0x4), 
	c(0x5), 
	c(0x6), 
	c(0x7), 
	c(0x8), 
	c(0x9), 
	c(0xA), 
	c(0xB), 
	c(0xC), 
	c(0xD), 
	c(0xE), 
	c(0xF)
];

// A list of the 40 patterns which exist.
const patterns = [
	p('x')  ,
	p('bs') ,
	p('ts') ,
	p('ls') ,
	p('rs') ,
	p('cs') ,
	p('ms') ,
	p('drs'),
	p('dls'),
	p('ss') ,
	p('cr') ,
	p('sc') ,
	p('ld') ,
	p('rud'),
	p('lud'),
	p('rd') ,
	p('vh') ,
	p('vhr'),
	p('hh') ,
	p('hhb'),
	p('bl') ,
	p('br') ,
	p('tl') ,
	p('tr') ,
	p('bt') ,
	p('tt') ,
	p('bts'),
	p('tts'),
	p('mc') ,
	p('mr') ,
	p('bo') ,
	p('cbo'),
	p('bri'),
	p('gra'),
	p('gru'),
	p('cre'),
	p('sku'),
	p('flo'),
	p('moj'),
	p('glb')
];

// The position (on the paper) where patterns belong.
const patPos = {x: 182, y: 149, w: 160, h: 320};

// New pattern creation, which returns [Pattern, Color].
/**
 * @param {Number} id 
 */
function np(id) {
	Generator.defineSelectInput('Pattern ' + id, patterns);
	Generator.defineSelectInput('Color for Pattern ' + id, colors);
	return [Generator.getVariable('Pattern ' + id), Generator.getVariable('Color for Pattern ' + id)];
}

// Ask for the base
Generator.defineSelectInput('Base Color', colors);

// Get the base color
let baseColor = Generator.getVariable('Base Color');

// Ask for six patterns
let selPats = [np(1), np(2), np(3), np(4), np(5), np(6)];

let banner = new Banner(baseColor, selPats);

banner.render()

/*
// Draw the background
Generator.drawImage('Lower');

// Draw the base
Generator.drawImage('Bases', basePos(baseColor), {x: 174, y: 141, w: 336, h: 336});

// Draw the patterns
for (let i in selPats) {
	Generator.drawImage('Patterns', pos(i[1], i[0]), patPos);
}
*/

// Done!
console.log('Done!');