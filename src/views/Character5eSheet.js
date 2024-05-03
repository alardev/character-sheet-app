/* eslint-disable no-case-declarations */
import Character5e from '../models/Character5e.js';
import Weapon from '../models/Weapon.js';
import SheetView from './SheetView.js';

const template = document.createElement('template');
template.innerHTML = `
<ul id="toptabs" role="tablist">
    <li role="presentation"><a role="tab" id="tab-stats" href="#pane-stats" aria-selected="true">Показники, Властивості, Спорядження і т.д.</a></li>
    <li role="presentation"><a role="tab" id="tab-notes" href="#pane-notes" aria-selected="false">Нотатки, Особистість, НIПи і т.д.</a></li>
</ul>

<section id="pane-stats" class="grid" role="tabpanel" aria-labelledby="tab-stats">
    <section class="fullwidth">
        <dl class="field">
            <div>
                <dt>Клас</dt><dd><field-editable data-name="charclass"></field-editable></dd>
            </div>
            <div>
                <dt>Раса</dt><dd><field-editable data-name="race"></field-editable></dd>
            </div>
            <div>
                <dt>Походження</dt><dd><field-editable data-name="background"></field-editable></dd>
            </div>
            <div>
                <dt>Світогляд</dt><dd><field-editable data-name="alignment"></field-editable></dd>
            </div>
            <div>
                <dt>Рівень</dt><dd><field-editable data-name="level" class="small"></field-editable></dd>
            </div>
            <div>
                <dt>Досвід</dt><dd><field-editable data-name="experience" class="small"></field-editable></dd>
            </div>
            <div>
                <dt>Бонус спеціалізації</dt><dd class="small" data-name="proficiency"></dd>
            </div>
            <div>
                <dt>Натхнення</dt><dd><field-editable data-name="inspiration" class="small"></field-editable></dd>
            </div>
            <div>
                <dt>Швикдість</dt><dd><field-editable data-name="speed" class="small"></field-editable></dd>
            </div>
            <div>
                <dt>Кістки здoров\'я</dt>
                <dd>
                    <field-editable class="smallinline" data-name="hd_cur" placeholder="0" aria-label="Current Hit Dice"></field-editable> <strong>/</strong> <field-editable class="smallinline" data-name="hd_max" placeholder="0" aria-label="Maximum Hit Dice"></field-editable>
                </dd>
            </div>
            <div class="with_icon">
                <dt>Рівень захисту</dt><dd><field-editable data-name="armor_class" placeholder="10" class="small"></field-editable></dd>
            </div>
            <div class="with_icon">
                <dt>Очки здоров\'я</dt>
                <dd>
                    <field-editable class="smallinline" data-name="hp_cur" placeholder="0" aria-label="Current Hit Points"></field-editable> <strong>/</strong> <field-editable class="smallinline" data-name="hp_max" placeholder="0" aria-label="Maximum Hit Points"></field-editable>
                </dd>
            </div>
            <div>
                <dt>Протидія смерті успіх/невдача</dt>
                <dd>
                    <input type="number" class="small" name="death_success" data-name="deathSave" data-subfield="success" value="0" min="0" max="3" aria-label="Death Save Successes" />
                    <strong>/</strong>
                    <input type="number" class="small" name="death_fail" data-name="deathSave" data-subfield="fail" value="0" min="0" max="3" aria-label="Death Save Fails" />
                </dd>
            </div>
            <div class="with_icon">
                <dt>Очки Класу</dt>
                <dd>
                    <input type="number" class="small" data-name="class_points" data-subfield="cur" placeholder="0" min="0" aria-label="Current Class Points"/> <strong>/</strong> <input type="number" class="small" data-name="class_points" data-subfield="max" placeholder="0" min="0" aria-label="Maximum Class Points" />
                </dd>
            </div>
        </dl>
    </section>

    <section>
        <h2 id="page-attributes">Здібності</h2>
        <section class="pc-attributes" aria-labelledby="page-attributes" role="list">
            <attr-listing data-name="str">Сил</attr-listing>
            <attr-listing data-name="dex">Спр</attr-listing>
            <attr-listing data-name="con">Ста</attr-listing>
            <attr-listing data-name="intel">Інт</attr-listing>
            <attr-listing data-name="wis">Муд</attr-listing>
            <attr-listing data-name="cha">Хар</attr-listing>
        </section>

        <h2 id="page-skills">Навички</h2>
        <section class="pc-skills" aria-labelledby="ppage-skills" role="list">
            <skill-listing data-name="skills" data-subfield="acrobatics">Акробатика (Спр)</skill-listing>
            <skill-listing data-name="skills" data-subfield="animal_handling">Розуміння Тварин (Муд)</skill-listing>
            <skill-listing data-name="skills" data-subfield="arcana">Таїнство (Інт)</skill-listing>
            <skill-listing data-name="skills" data-subfield="athletics">Атлетизм (Сил)</skill-listing>
            <skill-listing data-name="skills" data-subfield="deception">Обман (Хар)</skill-listing>
            <skill-listing data-name="skills" data-subfield="history">Історія (Інт)</skill-listing>
            <skill-listing data-name="skills" data-subfield="insight">Проникливість (Муд)</skill-listing>
            <skill-listing data-name="skills" data-subfield="intimidation">Залякування (Хар)</skill-listing>
            <skill-listing data-name="skills" data-subfield="investigation">Рослідування (Інт)</skill-listing>
            <skill-listing data-name="skills" data-subfield="medicine">Медицина (Муд)</skill-listing>
            <skill-listing data-name="skills" data-subfield="nature">Природа (Інт)</skill-listing>
            <skill-listing data-name="skills" data-subfield="perception">Відчуття (Муд)</skill-listing>
            <skill-listing data-name="skills" data-subfield="performance">Артистичність (Хар)</skill-listing>
            <skill-listing data-name="skills" data-subfield="persuasion">Переконливість (Хар)</skill-listing>
            <skill-listing data-name="skills" data-subfield="religion">Релігія (Інт)</skill-listing>
            <skill-listing data-name="skills" data-subfield="sleight_of_hand">Спритність Рук (Спр)</skill-listing>
            <skill-listing data-name="skills" data-subfield="stealth">Непомітність (Спр)</skill-listing>
            <skill-listing data-name="skills" data-subfield="survival">Виживання (Муд)</skill-listing>
        </section>
    </section>

    <section class="grid-span-col-2">
        <h2>Кидати кістки</h2>
        <dice-roller>
            <button type="button" slot="rollbuttons" data-die="1d20">1к20</button>
            <button type="button" slot="rollbuttons" data-die="1d12">1к12</button>
            <button type="button" slot="rollbuttons" data-die="1d10">1к10</button>
            <button type="button" slot="rollbuttons" data-die="1d8">1к8</button>
            <button type="button" slot="rollbuttons" data-die="1d6">1к6</button>
            <button type="button" slot="rollbuttons" data-die="1d4">1к4</button>
        </dice-roller>
        <h2>Зброя і атаки</h2>
        <table-editable columns="Назва||Атака||Шкода||Нотатки" data-name="weapons"></table-editable>

        <h2>Особливості та показники</h2>
        <simple-list data-name="features"></simple-list>

        <h2>Додаткові спеціалізації</h2>
        <field-editable class="largearea" data-name="proficiencies_other"></field-editable>

        <h2>Спорядження</h2>
        <simple-list data-name="equipment"></simple-list>

        <dl class="field">
            <div>
                <dt>ММ</dt><dd><field-editable data-name="cp" placeholder="0" class="small"></field-editable></dd>
                <dt>СМ</dt><dd><field-editable data-name="sp" placeholder="0" class="small"></field-editable></dd>
            </div>
            <div>
                <dt>ЗМ</dt><dd><field-editable data-name="gp" placeholder="0" class="small"></field-editable></dd>
                <dt>ПМ</dt><dd><field-editable data-name="pp" placeholder="0" class="small"></field-editable></dd>
            </div>
        </dl>
    </section>

    <section class="fullwidth">
        <h2 id="page-spells">Закляття</h2>

        <dl class="field">
            <div>
                <dt>Здібність проказування</dt><dd><field-editable data-name="spell_ability"></field-editable></dd>
            </div>
            <div>
                <dt>МС протидії</dt><dd><field-editable data-name="spell_save"></field-editable></dd>
            </div>
            <div>
                <dt>Бонус атаки закляттями</dt><dd><field-editable data-name="spell_attack"></field-editable></dd>
            </div>
        </dl>

    
    <h3>Чарунки заклять</h3>

    <dl class="field">
        <div>
            <dt>1-й</dt>
            <dd>
                <input type="number" class="small" data-name="spell_slots_cur" data-subfield="1" aria-label="Current spell slots: Level 1" min="0" />
                <strong>/</strong>
                <input type="number" class="small" data-name="spell_slots" data-subfield="1" aria-label="Max spell slots: Level 1" min="0" value="0" />
            </dd>
            <dt>2-й</dt>
            <dd>
                <input type="number" class="small" data-name="spell_slots_cur" data-subfield="2" aria-label="Current spell slots: Level 2" min="0" />
                <strong>/</strong>
                <input type="number" class="small" data-name="spell_slots" data-subfield="2" aria-label="Max spell slots: Level 2" min="0" value="0" />
            </dd>
        </div>
        <div>
            <dt>3-й</dt>
            <dd>
                <input type="number" class="small" data-name="spell_slots_cur" data-subfield="3" aria-label="Current spell slots: Level 3" min="0" />
                <strong>/</strong>
                <input type="number" class="small" data-name="spell_slots" data-subfield="3" aria-label="Max spell slots: Level 3" min="0" value="0" />
            </dd>
            <dt>4-й</dt>
            <dd>
                <input type="number" class="small" data-name="spell_slots_cur" data-subfield="4" aria-label="Current spell slots: Level 4" min="0" />
                <strong>/</strong>
                <input type="number" class="small" data-name="spell_slots" data-subfield="4" aria-label="Max spell slots: Level 4" min="0" value="0" />
            </dd>
        </div>
        <div>
            <dt>5-й</dt>
            <dd>
                <input type="number" class="small" data-name="spell_slots_cur" data-subfield="5" aria-label="Current spell slots: Level 5" min="0" />
                <strong>/</strong>
                <input type="number" class="small" data-name="spell_slots" data-subfield="5" aria-label="Max spell slots: Level 5" min="0" value="0" />
            </dd>
            <dt>6-й</dt>
            <dd>
                <input type="number" class="small" data-name="spell_slots_cur" data-subfield="6" aria-label="Current spell slots: Level 6" min="0" />
                <strong>/</strong>
                <input type="number" class="small" data-name="spell_slots" data-subfield="6" aria-label="Max spell slots: Level 6" min="0" value="0" />
            </dd>
        </div>
        <div>
            <dt>7-й</dt>
            <dd>
                <input type="number" class="small" data-name="spell_slots_cur" data-subfield="7" aria-label="Current spell slots: Level 7" min="0" />
                <strong>/</strong>
                <input type="number" class="small" data-name="spell_slots" data-subfield="7" aria-label="Max spell slots: Level 7" min="0" value="0" />
            </dd>
            <dt>8-й</dt>
            <dd>
                <input type="number" class="small" data-name="spell_slots_cur" data-subfield="8" aria-label="Current spell slots: Level 8" min="0" />
                <strong>/</strong>
                <input type="number" class="small" data-name="spell_slots" data-subfield="8" aria-label="Max spell slots: Level 8" min="0" value="0" />
            </dd>
        </div>
        <div>
            <dt>9-й</dt>
            <dd>
                <input type="number" class="small" data-name="spell_slots_cur" data-subfield="9" aria-label="Current spell slots: Level 9" min="0" />
                <strong>/</strong>
                <input type="number" class="small" data-name="spell_slots" data-subfield="9" aria-label="Max spell slots: Level 9" min="0" value="0" />
            </dd>
        </div>
    </dl>
</section>

    <section>
        <h3>Замовляння <span><add-spell-button data-level="0"></add-spell-button></span></h3>
        <simple-list data-name="spells" data-subfield="0"></simple-list>
    </section>
    <section hidden>
        <h3>1-й <span><add-spell-button data-level="1"></add-spell-button></span></h3>
        <simple-list data-name="spells" data-subfield="1"></simple-list>
    </section>
    <section hidden>
        <h3>2-й <span><add-spell-button data-level="2"></add-spell-button></span></h3>
        <simple-list data-name="spells" data-subfield="2"></simple-list>
    </section>
    <section hidden>
        <h3>3-й <span><add-spell-button data-level="3"></add-spell-button></span></h3>
        <simple-list data-name="spells" data-subfield="3"></simple-list>
    </section>
    <section hidden>
        <h3>4-й <span><add-spell-button data-level="4"></add-spell-button></span></h3>
        <simple-list data-name="spells" data-subfield="4"></simple-list>
    </section>
    <section hidden>
        <h3>5-й <span><add-spell-button data-level="5"></add-spell-button></span></h3>
        <simple-list data-name="spells" data-subfield="5"></simple-list>
    </section>
    <section hidden>
        <h3>6-й <span><add-spell-button data-level="6"></add-spell-button></span></h3>
        <simple-list data-name="spells" data-subfield="6"></simple-list>
    </section>
    <section hidden>
        <h3>7-й <span><add-spell-button data-level="7"></add-spell-button></span></h3>
        <simple-list data-name="spells" data-subfield="7"></simple-list>
    </section>
    <section hidden>
        <h3>8-й <span><add-spell-button data-level="8"></add-spell-button></span></h3>
        <simple-list data-name="spells" data-subfield="8"></simple-list>
    </section>
    <section hidden>
        <h3>9-й <span><add-spell-button data-level="9"></add-spell-button></span></h3>
        <simple-list data-name="spells" data-subfield="9"></simple-list>
    </section>
</section>

<section id="pane-notes" role="tabpanel" aria-labelledby="tab-notes" hidden class="grid">
    <section>
        <h2>НІПи</h2>
        <note-list data-name="npcs"></note-list>
    </section>
    <section>
        <h2>Клани</h2>
        <note-list data-name="factions"></note-list>
    </section>
    <section>
        <h2>Члени гурту</h2>
        <note-list data-name="partymembers"></note-list>
    </section>

    <section>
        <h2>Особистість</h2>
        <h3>Риси</h3>
        <field-editable class="smallarea" data-name="traits"></field-editable>
        <h3>Ідеали</h3>
        <field-editable class="smallarea" data-name="ideals"></field-editable>
        <h3>Зв\'язки</h3>
        <field-editable class="smallarea" data-name="bonds"></field-editable>
        <h3>Недоліки</h3>
        <field-editable class="smallarea" data-name="flaws"></field-editable>
        <h3>Вигляд</h3>
        <field-editable class="smallarea" data-name="appearance"></field-editable>
        <h2>Мови</h2>
        <field-editable class="smallarea" data-name="languages"></field-editable>
    </section>

    <section>
        <h2 id="page-notes_adv">Нотатки про пригоди</h2>
        <note-list data-name="notes_adv"></note-list>
    </section>
    <section>
        <h2>Нотатки про кампанії</h2>
        <note-list data-name="notes_cam"></note-list>
    </section>

    <section>
        <h2>Нотатки про персонажа</h2>
        <field-editable class="largearea" data-name="notes"></field-editable>
    </section>
</section>
`;
class Character5eSheet extends SheetView {
    /**
     * @param {EventEmitter} emitter
     */
    constructor ({
        emitter
    }) {
        super({
            emitter,
            templateNode: template.content.cloneNode(true)
        });
        this.spellButtons = [];
    }

    connectedCallback () {
        super.connectedCallback();
        // Listen for events emitted from the components
        this.shadowRoot.addEventListener('attributeChange', this._handleAttributeChange.bind(this));
        this.shadowRoot.addEventListener('saveChange', this._handleSaveChange.bind(this));

        this.emitter.on('character:skill:update', this._updateSkillMod, this);
        this.emitter.on('character:proficiency:update', this._updateProficiency, this);
        this.emitter.on('character:attribute:update', this._updateAttributeMods, this);
        this.emitter.on('character:save:update', this._updateSaveMods, this);
        this.emitter.on('character:set', this._addSpellButtonEvents, this);
        this.emitter.on('character:update:spells', this._updateSpellList, this);

        // Set footer links.
        const nav = document.querySelector('footer-nav');
        if (nav) {
            nav.setLinks([
                { label: 'Властивості', tab: 'pane-stats', href: '#page-attributes' },
                { label: 'Навички', tab: 'pane-stats', href: '#page-skills' },
                { label: 'Закляття', tab: 'pane-stats', href: '#page-spells' },
                { label: 'Нотатки', tab: 'pane-notes', href: '#page-notes_adv' }
            ]);
        }
    }

    disconnectedCallback () {
        super.disconnectedCallback();
        // Listen for events emitted from the components
        this.shadowRoot.removeEventListener('attributeChange', this._handleAttributeChange.bind(this));
        this.shadowRoot.removeEventListener('saveChange', this._handleSaveChange.bind(this));

        this.emitter.off('character:skill:update', this._updateSkillMod, this);
        this.emitter.off('character:proficiency:update', this._updateProficiency, this);
        this.emitter.off('character:attribute:update', this._updateAttributeMods, this);
        this.emitter.off('character:save:update', this._updateSaveMods, this);
        this.emitter.off('character:set', this._addSpellButtonEvents, this);
        this.emitter.off('character:update:spells', this._updateSpellList, this);
    }

    _updateSpellList () {
        const fields = this.shadowRoot.querySelectorAll('[data-name="spells"]');

        fields.forEach((el) => {
            const f = el.dataset.name || '';
        
            if (typeof this.cur_character[f] === 'undefined' || f === '') {
                return;
            };

            const subf = el.dataset.subfield || '';
            const charValue = (subf !== '') ? this.cur_character[f][subf] : this.cur_character[f];
            // spells added the the current character
            const listItems = charValue || [];
        
            el.clear();

            listItems.forEach((item) => {
                if (!item) {
                    return;
                };
                el.addItem(item);
            });

            if (listItems.length === 0) el.addItem();
        });
    };

    /**
     * @param {Character5e}
     */
    _validateCharacter (character) {
        if (!(character instanceof Character5e)) {
            throw new Error('Invalid character type for this view.');
        }
    }

    _renderCustomFields (el, fieldName, subFieldName, charValue) {
        switch (el.tagName) {
            case 'SKILL-LISTING':
                el.skillValue = charValue || 0;
                el.skillMod = this.cur_character.getSkillMod(subFieldName);
                return true;
            case 'ATTR-LISTING':
                el.attributeScore = charValue || 10;
                el.attributeMod = this.cur_character.attributeMod(fieldName);
                el.saveProficiency = this.cur_character.saves[fieldName];
                el.saveMod = this.cur_character.saveMod(fieldName);
                return true;
        }
        return false;
    }

    _renderCustomPost () {
        this.shadowRoot.querySelector('[data-name="proficiency"]').innerHTML = this.cur_character.proficiency;
    }

    _customFieldChange (ev, field, subfield) {
        if (field === 'skills') {
            const currentVal = this.character.getSkill(subfield);
            if (!this._sameValues(currentVal, ev.detail.value)) {
                this.character.setSkill(subfield, ev.detail.value);
                this._showUnsavedDialog();
            }
            return true;
        }
        if (field === 'weapons') {
            const currentVal = this.character[field];
            const newValue = ev.detail.value.map((object) => {
                return new Weapon(object);
            });
            if (!this._sameValues(currentVal, newValue)) {
                this.character[field] = newValue;
                this._showUnsavedDialog();
            }
            return true;
        }
    }
    /**
     * Update a skill's modifier in the UI.
     * @param {String} skill
     * @param {String} modifier
     */
    _updateSkillMod (skill, modifier) {
        const el = this.shadowRoot.querySelector(`skill-listing[data-subfield="${skill}"]`);
        if (!el) {
            return;
        }
        el.skillMod = modifier;
    }
    /**
     * Update the proficiency modifier in the UI.
     */
    _updateProficiency () {
        const proficiency = this.cur_character.proficiency;
        this.shadowRoot.querySelector('[data-name="proficiency"]').innerHTML = proficiency;

        Array.from(this.shadowRoot.querySelectorAll('skill-listing')).forEach((el) => {
            const skill = el.skillName;
            el.skillMod = this.cur_character.getSkillMod(skill);
        });

        Array.from(this.shadowRoot.querySelectorAll('attr-listing')).forEach((el) => {
            const attr = el.attributeName;
            el.saveMod = this.cur_character.saveMod(attr);
        });
    }
    /**
     * Update an attribute's modifier in the UI.
     * @param {String} attribute
     */
    _updateAttributeMods (attribute) {
        const el = this.shadowRoot.querySelector(`attr-listing[data-name=${attribute}]`);
        if (!el) {
            return;
        }
        el.attributeMod = this.cur_character.attributeMod(attribute);
        el.saveMod = this.cur_character.saveMod(attribute);
    }
    /**
     * Update a save modifier in the UI.
     * @param {String} attribute
     */
    _updateSaveMods (attribute) {
        const el = this.shadowRoot.querySelector(`attr-listing[data-name=${attribute}]`);
        if (!el) {
            return;
        }
        el.saveMod = this.cur_character.saveMod(attribute);
    }
    /**
     * Handle input[name=number] changes.
     * @param {Event} ev
     */
    _customNumberInputChange (ev) {
        const field = ev.target.dataset.name;
        const subfield = ev.target.dataset.subfield;
        const newValue = parseInt(ev.target.value, 10);
        if (field === 'spell_slots') {
            const spellList = this.shadowRoot.querySelector(`[data-name="spells"][data-subfield="${subfield}"]`);
            if (!newValue) {
                // this covers 0 and NaN
                spellList.parentNode.hidden = true;
            } else {
                spellList.parentNode.hidden = false;
            }
        }
    }
    /**
     * When an attribute is changed in the UI.
     * @param {CustomEvent} ev
     */
    _handleAttributeChange (ev) {
        const field = ev.detail.field || '';
        if (!field) {
            return;
        }
        this.cur_character.setAttribute(field, ev.detail.value);
        this._showUnsavedDialog();
    }
    /**
     * When a save is (un)checked in the UI.
     * @param {CustomEvent} ev
     */
    _handleSaveChange (ev) {
        const field = ev.detail.field || '';
        if (!field) {
            return;
        }
        this.cur_character.setSaveProficiency(field, ev.detail.value);
        this._showUnsavedDialog();
    }
}

if (!window.customElements.get('sheet-view-5e')) {
    window.customElements.define('sheet-view-5e', Character5eSheet);
}

export default Character5eSheet;
