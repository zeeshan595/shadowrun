import * as React from "react";
import { Race } from "../../../Model/MetaType";

export interface IRaceSelectionProps {
  updateRace: (value: Race) => void;
  value: Race;
  races: Race[];
}

export interface IRaceSelectionState {}

export class RaceSelection extends React.Component<
  IRaceSelectionProps,
  IRaceSelectionState
> {
  render() {
    const raceDescriptions = [
      <div>
        <h4>Humans</h4>
        <h6>(homo sapiens sapiens)</h6>
        <ul>
          <li>
            <b>Average height:</b> 1.75 meters
          </li>
          <li>
            <b>Average weight:</b> 78kg
          </li>
          <li>
            <b>Ears:</b> Rounded
          </li>
          <li>
            <b>Known for:</b> Average size; average build; freaking out about
            people who don't meet their averages
          </li>
          <li>
            <b>Racial qualities:</b> Humans have no extra racial qualities.
          </li>
        </ul>
        <p>
          As the majority of the sentient beings of the world, humans create
          existing definitions of “normal,” and then some of them set out to
          abuse those definitions as hard as they can. These humans know that
          they lack the pure physical strength and social cohesion of some of
          the other metatypes, so they shape the world in a way that keeps the
          individuals they don’t like from ever realizing what they can do, and
          what they can become. The side effect of this, of course, is that many
          humans are caught up in the demoralizing machinery that the ruling
          corporate class has assembled, because they don’t fit into this
          artificial average. They are grist for the mill, people to be chewed
          up and spat out in the name of greater wealth and power for the people
          at the top. Because they’re humans, and there are so many of them,
          who’s going to notice how they’re ground down, and who is going to
          miss them when they’re gone? The shadows are full of humans who could
          not find a way to be normal or average
        </p>
      </div>,
      <div>
        <h4>Elves</h4>
        <h6>(homo sapiens nobilis)</h6>
        <ul>
          <li>
            <b>Average height:</b> 1.9 meters
          </li>
          <li>
            <b>Average weight:</b> 80kg
          </li>
          <li>
            <b>Ears:</b> Pointy
          </li>
          <li>
            <b>Known for:</b> Slender, litche build; being attractive and
            knowing it
          </li>
          <li>
            <b>Racial qualities:</b> Elves have low-light vision (p. 72)
          </li>
        </ul>
        <p>
          Perhaps the most infuriating thing about elves to the other metatypes
          is that you can resent them like hell, and they just won’t care. They
          have two prosperous nations—Tír na nÓg (formerly known as Ireland) and
          Tír Tairngire (in the western part of North America)—they have people
          in some of the most powerful positions in the world, and celebrities
          whose MeFeed hits are in the billions. They are envied, not looked
          down on. But plenty of elves know that this envy does not extend to
          every elf. If you’re an elf who is not rich, elegant, or graceful,
          you’re often viewed as a failure, someone who had all the gifts of
          life handed to them and somehow screwed them up. And it’s not just
          nonelves who hold this view. Never mind that you might have grown up
          poor, never mind what obstacles you had to face—people think you
          automatically had it easy because you’re an elf. But elf society is
          not easy to survive. The upper crust can be absolutely ruthless about
          enforcing their status quo, labeling those who don’t fit as
          malcontents and finding ways to cast them aside. The barrens of the
          major sprawls of the world have plenty of elves who were thrown out
          because they wouldn’t cave to what society wanted them to be. Their
          anger could burn the whole earth.
        </p>
      </div>,
      <div>
        <h4>Dwarfs</h4>
        <h6>(homo sapiens pumilionis)</h6>
        <ul>
          <li>
            <b>Average height:</b> 1.2 meters
          </li>
          <li>
            <b>Average weight:</b> 54kg
          </li>
          <li>
            <b>Ears:</b> Pointy
          </li>
          <li>
            <b>Known for:</b> Short size; stocky build; perseverance
          </li>
          <li>
            <b>Racial qualities:</b> Dwarfs have thermographic version (p. 73)
            and toxin resistance (p. 73)
          </li>
        </ul>
        <p>
          Sixth World dwarfs are often accepted into mainstream society without
          being fully valued. The taller metatypes seem to be happiest when
          dwarfs fit the roles they have preconceived for them— sidekicks,
          drivers, mechanics, that sort of thing. It doesn’t help that their
          size helps them squeeze into vehicles that orks, humans, and elves
          might have difficulty with, ones that trolls couldn’t even
        </p>
      </div>,
      <div>
        <h4>Orks</h4>
        <h6>(homo sapiens robustus)</h6>
        <ul>
          <li>
            <b>Average height:</b> 1.9 meters
          </li>
          <li>
            <b>Average weight:</b> 128kg
          </li>
          <li>
            <b>Ears:</b> Pointy
          </li>
          <li>
            <b>Known for:</b> Powerful physique; tusks; constantly being seen as
            outsiders
          </li>
          <li>
            <b>Racial qualities:</b> Orks have low-light vision (p. 72) and the
            Built Tough (1) quality (see p. 70)
          </li>
        </ul>
        <p>
          Orks make people nervous, and people don’t like to be nervous. Their
          tusks, bone structure, and pointed ears mark them as something
          altogether else, and their strength and size clearly show the damage
          they could do. As humans have done for centuries, they address the
          thing they fear by pushing them aside, keeping orks from building
          collective strength, and crushing them with the sheer force of
          numbers. That approach works as long as you can keep fear stoked and
          have it immobilize the masses. Because if people can move past the
          fear and start to understand the deliberate injustice that has been
          forced on some groups, they separate themselves from society’s
          machine, and the number of people used to enforce oppression gets
          smaller. Oppressors aren’t especially good at developing new solutions
          to such problems—they usually just resort to oppressing harder. So
          while realization of the injustices they deal with is spreading, orks
          across the Sixth World are preparing for things to get worse so that
          they can survive and set about the work of making things better. They
          already have some enclaves carved out for themselves—Seattle’s
          Underground, Atlanta’s Sweetwater Creek, Dharavi in the Indian
          Union—and they hope those locales will be the starting points for
          societies that include orks instead of fearing them
        </p>
      </div>,
      <div>
        <h4>Trolls</h4>
        <h6>(homo sapiens ingentis)</h6>
        <ul>
          <li>
            <b>Average height:</b> 2.5 meters
          </li>
          <li>
            <b>Average weight:</b> 300kg
          </li>
          <li>
            <b>Ears:</b> Slightly pointy, often hidden by horns
          </li>
          <li>
            <b>Known for:</b> Being so big, you guys. Just huge. And horns.
          </li>
          <li>
            <b>Racial qualities:</b> Trolls have thermographic vision (p. 73),
            the Built Tough (2) quality (see p. 70), and dermal deposits (which
            provide +1 to trolls’ Defense Rating).
          </li>
        </ul>
        <p>
          It’s not easy to live in a society where you look like the walking
          embodiment of everyone else’s nightmares. Being two to three times as
          large as everyone else doesn’t help much, either. It’s not a troll’s
          world, and most of the other residents of the world aren’t inclined to
          change that fact. Who wants to make space for imposing monsters?
          Trolls are going to have to force their way into a place in the
          world—of course, when they force their way in anywhere, they’re
          inevitably called vandals and destroyers. A significant number of
          trolls have looked at the way the deck is stacked against them and
          decided they don’t need to play the rest of the world’s game anymore.
          They’ll stand aside and watch the world burn—and maybe throw on an
          extra match every now and then. The Black Forest Troll Republic is one
          of the most important troll communities in the world, acting as a
          beacon and vision for what troll society can be while keeping a
          certain distance from everyone else. Whether they assimilate or build
          a higher wall is an open question. Trolls have the most difficult time
          adapting to other metatypes because their bodies are so different.
          It’s more than just the size and the horns— they have dermal deposits
          all over their bodies that make knobs, bumps, and other formations.
          They scrape up furniture and clothing, and make some people think
          twice about giving a troll a big bear hug. Especially since there are
          few people who can wrap their arms around a whole troll.
        </p>
      </div>,
    ];

    return (
      <div>
        <h2>Select a metatype</h2>
        <div className="raceSelection">
          {this.props.races.map((race, index) => (
            <label key={index} className="checkmarkContainer">
              {Race[race]}
              <input
                type="radio"
                name="race"
                value={race}
                checked={this.props.value === race}
                onChange={() => this.props.updateRace(race)}
              />
              <span className="checkmark"></span>
            </label>
          ))}
        </div>
        <div className="raceDescription">
          {raceDescriptions[this.props.value]}
        </div>
      </div>
    );
  }
}
