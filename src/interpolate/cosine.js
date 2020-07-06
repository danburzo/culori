/*
	Cosine interpolation
	--------------------

	Reference: 

		http://paulbourke.net/miscellaneous/interpolation/
 */

import identity from '../util/identity';
import lerp from '../util/lerp';
import cosine from '../easing/cosine';
import gamma from '../easing/gamma';
import { interpolatorPiecewise } from './piecewise';

const interpolatorCosine = interpolatorPiecewise((a, b, t) =>
	lerp(a, b, cosine(t))
);

const interpolateCosine = (fixup, γ = 1) => arr => {
	return t => interpolatorCosine((fixup || identity)(arr))(gamma(t, γ));
};

export { interpolatorCosine, interpolateCosine };
