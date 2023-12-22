**Glupp Shitto's titanic nasdaq festivus scripto** (also known as "crimbo") is a script meant to help [Kingdom of Loathing](https://www.kingdomofloathing.com/) players efficiently collect crimbo stuff in KoL.

To install, run the following command on an up-to-date [KolMafia](https://github.com/kolmafia/kolmafia) version:

```
git checkout loathers/crimbo release
```

To update, run `git update` or check the "Update installed Git projects on login" box within Mafia preferences.

## Running Crimbo

To run crimbo, run the following command in the mafia GCLI:

`crimbo`

You can specify the number of turns to run (use negative numbers for the number of turns remaining) with the turns argument. The following example will use 10 turns.

`crimbo turns=10`

You can specify which zone to adventure in, default rotates on availability.

`crimbo zone=bar`
`crimbo zone=cottage`
`crimbo zone=foundry`

You can specify an affiliation which affects the monsters you encounter.

`crimbo affiliation=elves`
`crimbo affiliation=pirates`
`crimbo affiliation=none`

Use the help argument for more details.

`crimbo help`
