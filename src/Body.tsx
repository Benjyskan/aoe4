import React from 'react'
import { Route, Switch } from 'react-router'

function Body() {
	return (
		<main>
			<Switch>
				<Route path='/about'>
					about
				</Route>
				<Route path='/content'>
					<p>context</p>
					Lorem, ipsum dolor sit amet consectetur adipisicing elit.Suscipit fugiat in voluptatibus illo placeat sapiente!Molestias dolor velit aliquid veritatis at, ab maxime eaque sequi repellendus aliquam voluptatem, numquam mollitia.Sapiente ducimus nostrum nesciunt consectetur architecto amet, doloribus dolorum repellat explicabo quasi quae alias sit est a quod accusantium quas libero, at odit quia consequatur?Doloremque reprehenderit temporibus adipisci.Numquam accusantium debitis iste suscipit quaerat sequi nemo, voluptatibus natus impedit ab libero blanditiis cum tempora eaque similique optio?Veniam perspiciatis corporis quasi reiciendis enim nemo veritatis velit corrupti mollitia odit eveniet fuga illum deserunt minus officiis maiores repellat, iure facere temporibus molestias sint repudiandae id quas.Perferendis accusamus enim iste saepe sit ab cum esse eligendi.Tenetur provident cumque inventore eveniet neque facilis libero nihil, nesciunt dolores id soluta, recusandae reiciendis minima, facere velit.Obcaecati doloremque aut minus, omnis, voluptas dicta ut minima harum odio aperiam dolor fugit nam deleniti, eius nulla reprehenderit molestias.Incidunt beatae, illum dignissimos facilis iure excepturi culpa?Magnam nesciunt soluta maiores quas doloribus, beatae sit sed consequatur consectetur aliquam, dignissimos facere consequuntur corrupti culpa in voluptatibus!Sapiente nemo odio atque odit repellendus, quae voluptatibus porro reprehenderit laudantium at recusandae natus dignissimos harum veritatis maxime dolorem explicabo.Dicta enim saepe sapiente laborum esse suscipit doloribus est quidem, vitae perspiciatis, porro numquam illo voluptates minima commodi corporis!Aliquam ducimus alias quo possimus!Quod soluta quibusdam corrupti sint magnam tempore repudiandae quo aperiam, doloremque ipsam minima suscipit consequuntur voluptates quas.Veritatis, est accusantium dolore sed quisquam praesentium hic ex a rem expedita nostrum quos, aperiam, possimus omnis laudantium officia voluptate odio.Consequatur quos similique vel possimus porro, dicta sapiente blanditiis repellendus, veritatis sit sed fuga velit natus quidem, odit distinctio!Repudiandae tempora laudantium iure minima explicabo numquam repellat fuga labore pariatur fugit, eveniet officiis.Ipsa quasi eius iste.
				</Route>
				<Route path='/'>
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi autem nobis quae esse? Quasi error itaque doloribus animi! Laborum, unde! Hic vel ipsam nihil id tempora, asperiores alias impedit eius.
				</Route>
			</Switch>
		</main>
	)
}

export default Body
